import { Locator } from '../types';
import { isCallable } from '../../../shared';

export function isLocator(value: unknown): value is Locator {
  return isCallable(value) && !!(value as any).__locatorRef;
}

/**
 * Checks if an tag name is a native HTML tag and not a Vue component
 */
export function isHTMLTag(tag: string) {
  return ['input', 'textarea', 'select'].includes(tag);
}
