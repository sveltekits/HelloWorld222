import type { Tuser } from '$lib/types';
import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async (serverLoadEvent) => {
	const { cookies, locals } = serverLoadEvent;

	console.log('===== server layout loading =====');

	let user: Tuser = {
		id: '000000',
		name: 'none',
		region: 'none'
	};

	if (!locals.user) {
		console.log('Access Not Denied :: USER');
		// throw redirect(303, '/');
	} else {
		user = {
			id: locals.user.id,
			name: locals.user.name,
			region: locals.user.region
		};
	}

	return user;

	/*        
        if (cookies.get('email') !== null) {
            console.log('========>>>>> ', cookies.get('email'));
            user.username = cookies.get('email') as string;
        }
    */

	return UserActivation;
};
