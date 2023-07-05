const reportWebVitals = onPerfEntry => {
    if (onPerfEntry && onPerfEntry instanceof Function) {
        // Importa as funções de medição de métricas do pacote 'web-vitals'
        import ('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
            // Chama as funções de medição de métricas e passa a função 'onPerfEntry' como argumento
            getCLS(onPerfEntry);
            getFID(onPerfEntry);
            getFCP(onPerfEntry);
            getLCP(onPerfEntry);
            getTTFB(onPerfEntry);
        });
    }
};

export default reportWebVitals;