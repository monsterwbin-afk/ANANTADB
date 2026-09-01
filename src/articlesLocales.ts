import { cnArticles } from './data/articles/cn';
import { twArticles } from './data/articles/tw';
import { enArticles } from './data/articles/en';
import { jpArticles } from './data/articles/jp';
import { krArticles } from './data/articles/kr';
import { deArticles } from './data/articles/de';
import { frArticles } from './data/articles/fr';
import { itArticles } from './data/articles/it';
import { ruArticles } from './data/articles/ru';

export const ARTICLES_CONTENT_I18N: Record<string, Record<string, string>> = {
  CN: cnArticles,
  TW: twArticles,
  EN: enArticles,
  JP: jpArticles,
  KR: krArticles,
  DE: deArticles,
  FR: frArticles,
  IT: itArticles,
  RU: ruArticles,
};
