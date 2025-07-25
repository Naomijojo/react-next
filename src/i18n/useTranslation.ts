// 統一的翻譯 Hook -> 默認只提供 t 函數
import { useLanguageContext } from './LanguageProvider';

type Locale = 'zh' | 'en';

interface TranslationResult {
  t: (key: string) => string;
  locale?: Locale;
  switchLanguage?: (newLocale: Locale) => void;
}

export function useTranslation(options?: { 
  includeLocale?: boolean; 
  includeSwitchLanguage?: boolean; 
}): TranslationResult {
  const { locale, messages, switchLanguage: contextSwitchLanguage } = useLanguageContext();

  const t = (key: string): string => {
    const keys = key.split('.');
    let value: unknown = messages;

    // 遍歷嵌套的鍵值
    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = (value as Record<string, unknown>)[k];
      } else {
        console.warn(`翻譯失敗: ${key}`);
        return key;
      }
    }
    if (typeof value !== 'string') {
      console.warn(`翻譯失敗: ${key}`);
      return key;
    }
    return value;
  };

  // 只返回 t 函數
  if (!options) {
    return { t };
  }

  // 按需獲取選擇 [翻譯功能] 或 [語言切換功能]
  const result: TranslationResult = { t };
  
  if (options.includeLocale) {
    result.locale = locale;
  }
  if (options.includeSwitchLanguage) {
    result.switchLanguage = contextSwitchLanguage;
  }
  return result;
} 