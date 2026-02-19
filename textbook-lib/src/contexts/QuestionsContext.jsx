import React, { createContext, useContext, useState, useEffect } from 'react';
import resourceCache from '../services/resourceCache';

const QuestionsContext = createContext(null);

export const useQuestions = () => {
  const context = useContext(QuestionsContext);
  if (!context) {
    console.warn('useQuestions must be used within a QuestionsProvider');
    return { questions: [], loading: false, error: null };
  }
  return context;
};

export const QuestionsProvider = ({ children, initialQuestions = null }) => {
  const [questions, setQuestions] = useState(initialQuestions || []);
  const [loading, setLoading] = useState(!initialQuestions);
  const [error, setError] = useState(null);

  useEffect(() => {
    // If initialQuestions provided, use those instead of loading from JSON
    if (initialQuestions) {
      setQuestions(initialQuestions);
      setLoading(false);
      console.log('QuestionsContext: Using provided', initialQuestions.length, 'questions');
      return;
    }

    const loadQuestions = async () => {
      try {
        setLoading(true);
        setError(null);
        
        // Load questions from public/questions.json
        const data = await resourceCache.getJSON('/questions.json');
        setQuestions(data);
        console.log('QuestionsContext: Loaded', data.length, 'questions');
      } catch (e) {
        console.error('Failed to load questions:', e);
        setError(e.message);
      } finally {
        setLoading(false);
      }
    };

    loadQuestions();
  }, [initialQuestions]);

  const value = {
    questions,
    loading,
    error,
    // Utility functions
    getQuestionById: (id) => questions.find(q => q.id === id),
    getQuestionsByChapter: (chapter) => questions.filter(q => q.chapter === chapter),
    searchQuestions: (searchTerm) => {
      const term = searchTerm.toLowerCase();
      return questions.filter(q => 
        q.question?.toLowerCase().includes(term) || 
        q.answer?.toLowerCase().includes(term)
      );
    }
  };

  return (
    <QuestionsContext.Provider value={value}>
      {children}
    </QuestionsContext.Provider>
  );
};

export default QuestionsContext;
