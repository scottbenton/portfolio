interface RevealOptions {
	delay?: number;
}

/**
 * Svelte action: fades an element up once it scrolls into view.
 * Does nothing when the user prefers reduced motion — content is
 * never hidden in that case since the classes are only added here.
 */
export function reveal(node: HTMLElement, options: RevealOptions = {}) {
	if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
		return;
	}

	node.classList.add('reveal-hidden');
	if (options.delay) {
		node.style.transitionDelay = `${options.delay}ms`;
	}

	const observer = new IntersectionObserver(
		(entries) => {
			if (entries.some((entry) => entry.isIntersecting)) {
				node.classList.add('reveal-shown');
				observer.disconnect();
			}
		},
		{ threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
	);
	observer.observe(node);

	return {
		destroy() {
			observer.disconnect();
		}
	};
}
