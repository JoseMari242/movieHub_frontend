// import React from 'react'
// import { useAuth0 } from "@auth0/auth0-react";


// export function Home() {

//   const { logout } = useAuth0();

//   return (
//     <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
//       Log Out
//     </button>
//   );
// };

import { protectedRequest, publicRequest } from "../../utils/functions";
import { useAuth0 } from "@auth0/auth0-react";


export function Home() {
	const { logout, getAccessTokenSilently, user } = useAuth0();
	return (
		<>
			<h1>{user?.name}</h1>
			
			<div className="card">
				<button onClick={() => publicRequest()}>Public Request</button>
				<button onClick={() => protectedRequest(getAccessTokenSilently)}>
					Protected Request
				</button>
				<button onClick={() => logout()}>Logout</button>
			</div>
		</>
	);
}
