window.alert("hello word")
 const ctx = document.getElementById('financialChart');

        new Chart(ctx, {
            type: 'line',

            data: {
                labels: [
                    '01/06',
                    '05/06',
                    '10/06',
                    '15/06',
                    '20/06',
                    '25/06',
                    '30/06'
                ],

                datasets: [

                    {
                        label: 'Entradas',
                        data: [
                            1200,
                            2500,
                            3200,
                            4800,
                            4200,
                            5000,
                            5300
                        ],

                        borderColor: '#22c55e',
                        backgroundColor: 'rgba(34,197,94,0.15)',
                        fill: true,
                        tension: 0.4
                    },

                    {
                        label: 'Saídas',
                        data: [
                            300,
                            900,
                            1200,
                            1800,
                            1900,
                            2000,
                            2150
                        ],

                        borderColor: '#ef4444',
                        backgroundColor: 'rgba(239,68,68,0.12)',
                        fill: true,
                        tension: 0.4
                    }

                ]
            },

            options: {
                responsive: true,
                maintainAspectRatio: true
            }

        });