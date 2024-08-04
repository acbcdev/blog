import type { PropsAddGlobalEventListener } from '@/types/dom'
/**
 * Get element from dom by selector string
 * @example
 * 	const elementClass = $('.my-class')
 * 	const elementId = $('#my-id')
 * @param selector
 * @param context
 * @returns  HTMLElement
 */
export const $ = <T extends HTMLElement>(
  selector: string,
  context: Document | HTMLElement = document
) => context.querySelector<T>(selector)

/**
 * Get elements from dom by selector string
 * @example
 * 	const elements = $$('.my-class')
 * @param selector
 * @param context
 * @returns  NodeList
 */
export const $$ = <T extends HTMLElement>(
  selector: string,
  context: Document | HTMLElement = document
) => context.querySelectorAll<T>(selector)



/**
 * Adds a global event listener to the specified parent element default to the document.
 *
 * @param {PropsAddGlobalEventListener} options - The options for the event listener.
 * @param {string} options.selector - The CSS selector for the target element.
 * @param {string} options.event - The event type to listen for.
 * @param {(e: Event) => void} options.callback - The callback function to execute when the event is triggered.
 * @param {Document | HTMLElement} [options.parent=document] - The parent element to attach the event listener to.
 * @return {void}
 */
export function addGlobalEventListener({ selector, event, callback, parent = document }: PropsAddGlobalEventListener): void {
  parent.addEventListener(event, (e) => {
    const eventTarget = e?.target as Element
    if (eventTarget.matches(selector)) callback(e)
  })
}