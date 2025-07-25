// 狀態管理 
'use client'

import React, { createContext, useContext, useState, ReactNode } from 'react';
import zhMessages from '../../public/locales/zh/translation.json';
import enMessages from '../../public/locales/en/translation.json';

//messagesMap 物件用於儲存不同語言的翻譯
const messagesMap = {
  zh: zhMessages,
  en: enMessages
}
//Locale 嚴格類型，只能是 zh 或 en
type Locale = 'zh' | 'en'

//LanguageContextType 介面->定義語言上下文的類型
interface LanguageContextType {
  locale: Locale;
  messages: typeof zhMessages;
  switchLanguage: (newLocale: Locale) => void;
}
//LanguageContext 創建上下文對象，共享狀態和方法
const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

//LanguageProvider ｜ provider提供狀態和方法給子組件
export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>('zh') //初始化語言為 zh

  //switchLanguage 切換語言->更新狀態
  const switchLanguage = (newLocale: Locale) => {
    setLocale(newLocale)
  }

  return (
    //value 提供狀態和方法給子組件
    <LanguageContext.Provider value={{ 
      locale, 
      messages: messagesMap[locale], 
      switchLanguage 
    }}>
      {children}
    </LanguageContext.Provider>
  );
}

// 內部使用的 Hook，不直接暴露給外部
export function useLanguageContext() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useTranslation must be used within a LanguageProvider');
  }
  return context;
}