const adalConfig: adal.Config = {
  clientId: '18d99976-ff3e-4d4a-81b4-82eb41338f2b',
  tenant: 'common',
  extraQueryParameter: 'nux=1',
  endpoints: {
    'https://react-aad-order-webapi.azurewebsites.net': '00000000-0000-0000-0000-000000000000'
  },
  postLogoutRedirectUri: window.location.origin,
  cacheLocation: 'sessionStorage'
};

export default adalConfig;