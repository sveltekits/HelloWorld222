// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
import type { Tuser } from '$lib/types';
declare global {
	namespace App {
		// interface Error {}
		interface Locals {
			user: Tuser;
		}
		// interface PageData {}
		// interface Platform {}
	}
}

export {};
