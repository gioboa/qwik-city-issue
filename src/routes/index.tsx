import { component$, useMount$, useStore } from '@builder.io/qwik';
import { DocumentHead } from '@builder.io/qwik-city';

export default component$(() => {
	const state = useStore({ name: 'gioboa' });
	useMount$(() => {
		state.name = 'misko';
	});
	return <div>{state.name}</div>;
});

export const head: DocumentHead = {
	title: 'Welcome to Qwik City',
};
