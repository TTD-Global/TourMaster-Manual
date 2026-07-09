import React, { useEffect } from 'react';
import type { ReactNode } from 'react';

// When a TOC link targets a heading inside a hidden Tab panel,
// this walks up the DOM and clicks the correct tab(s) before scrolling.
function activateTabsForElement(target: HTMLElement): boolean {
  let switched = false;
  let node: HTMLElement | null = target.parentElement;

  while (node) {
    if (node.getAttribute('role') === 'tabpanel' && node.hasAttribute('hidden')) {
      const container = node.parentElement;
      if (container) {
        const panels = Array.from(container.children).filter(
          (c) => c.getAttribute('role') === 'tabpanel',
        );
        const panelIndex = panels.indexOf(node);
        const tablist = container.querySelector('[role="tablist"]');
        if (tablist && panelIndex >= 0) {
          const tab = tablist.querySelectorAll('[role="tab"]')[panelIndex] as HTMLElement | undefined;
          if (tab) {
            tab.click();
            switched = true;
          }
        }
      }
    }
    node = node.parentElement;
  }

  return switched;
}

export default function Root({ children }: { children: ReactNode }) {
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const link = (e.target as Element).closest('a.table-of-contents__link');
      if (!link) return;

      const href = link.getAttribute('href');
      if (!href?.startsWith('#')) return;

      const targetId = href.slice(1);
      const targetEl = document.getElementById(targetId);
      if (!targetEl) return;

      // Only intercept when the heading is inside a Tab
      const insidePanel = targetEl.closest('[role="tabpanel"]');
      if (!insidePanel) return;

      e.preventDefault();

      const switched = activateTabsForElement(targetEl);
      const delay = switched ? 160 : 0;

      setTimeout(() => {
        const el = document.getElementById(targetId);
        if (!el) return;
        const navbarHeight = (document.querySelector('.navbar') as HTMLElement)?.offsetHeight ?? 60;
        const top = el.getBoundingClientRect().top + window.scrollY - navbarHeight - 8;
        window.scrollTo({ top, behavior: 'smooth' });
      }, delay);
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  return <>{children}</>;
}
