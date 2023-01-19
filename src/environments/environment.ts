export const environment = {
    production: false,
    apiUrl: 'http://localhost:8080'
};

export const documentApi = {
    documentUrl: `${environment.apiUrl}/document`,
}

export const appDetailsApi = {
    applicationDetailsUrl: `${environment.apiUrl}/details`,
    footerInfo: `${environment.apiUrl}/details/footer`
}


