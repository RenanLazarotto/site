import Bash from '$lib/icons/bash.svelte';
import Bootstrap from '$lib/icons/bootstrap.svelte';
import CodeIgniter from '$lib/icons/codeigniter.svelte';
import CSS from '$lib/icons/css.svelte';
import JavaScript from '$lib/icons/javascript.svelte';
import Laravel from '$lib/icons/laravel.svelte';
import Linux from '$lib/icons/linux.svelte';
import Magento from '$lib/icons/magento.svelte';
import PHP from '$lib/icons/php.svelte';
import Python from '$lib/icons/python.svelte';
import RabbitMQ from '$lib/icons/rabbitmq.svelte';
import Redis from '$lib/icons/redis.svelte';
import Svelte from '$lib/icons/svelte.svelte';
import Symfony from '$lib/icons/symfony.svelte';
import Tailwind from '$lib/icons/tailwind.svelte';
import Windows from '$lib/icons/windows.svelte';

export function load() {
    return {
        projects: [
            {
                year: '2022',
                title: 'Portfolio',
                at: '-',
                stack: ['Svelte', 'Tailwind'],
                links: []
            },
            {
                year: '2020',
                title: 'Sistema de Feirão',
                at: 'DealerSites',
                stack: ['Laravel', 'Symfony', 'PHP', 'Bootstrap'],
                links: ['https://dealersites.com.br/produtos/mydealer#features-feirao']
            },
            {
                year: '2019',
                title: 'Módulos para Magento 2',
                at: 'DigitalHub',
                stack: ['Magento', 'PHP', 'JavaScript'],
                links: []
            },
            {
                year: '2018',
                title: 'Sistema de relatórios',
                at: 'CrediOK',
                stack: ['CodeIgniter', 'Symfony', 'Bootstrap', 'JavaScript', 'PHP'],
                links: ['https://reports.crediok.com.br/']
            }
        ],
        stack: [
            CodeIgniter,
            Laravel,
            PHP,
            Python,
            RabbitMQ,
            Redis,
            Symfony,
            Bootstrap,
            CSS,
            JavaScript,
            Svelte,
            Tailwind,
            Bash,
            Linux,
            Windows
        ],
        jobs: [
            {
                key: 'hammer',
                startDate: new Date(2022, 8),
                endDate: 'Atualmente',
                location: 'Colombo, Paraná (Remoto)',
                title: 'Desenvolvedor PHP',
                company: 'Hammer Consult',
                companyUrl: 'https://wlgrupo.com/empresa/hammer/',
                description: [
                    'Projeto novo, sem atividades desenvolvidas até o momento'
                ],
                techStack: []
            },
            {
                key: 'procob',
                startDate: new Date(2020, 12),
                endDate: new Date(2022, 6),
                location: 'Pinhais, Paraná',
                title: 'Desenvolvedor Backend Pleno',
                company: 'Procob',
                companyUrl: 'https://www.procob.com/',
                description: [
                    'Fiz correções no sistema administrativos internos',
                    'Desenvolvi produtos novos com as integrações em fornecedores já existentes e fiz integrações com fornecedores novos',
                    'Desenvolvi novas funcionalidades, correções e reescritas parciais nas APIs',
                    'Fiz a reescrita do produto Robô de Processamento, migrando o antigo processo, escrito em Perl, para um fluxo novo e escalável que utiliza PHP, fila de processamento RabbitMQ e ferramentas do Linux para maior agilidade',
                    'Gerenciei servidores de produção, desenvolvimento e homologação, relizando pequenos ajustes quando necessário nas configurações',
                    'Modernizei o ambiente de desenvolvimento, criando uma nova imagem de base para a equipe utilizar'
                ],
                techStack: [
                    'Linux (Ubuntu)',
                    'PHP (5.6+)',
                    'Python',
                    'CI/CD (GitLab)',
                    'RabbitMQ',
                    'Symfony (2.8+)',
                    'MySQL'
                ]
            },
            {
                key: 'dealersites',
                startDate: new Date(2020, 4),
                endDate: new Date(2020, 7),
                location: 'Colombo, Paraná (Remoto)',
                title: 'Desenvolvedor Backend',
                company: 'DealerSites',
                companyUrl: 'https://dealersites.com.br/',
                description: [
                    'Fiz correções no sistema existente, baseado em Symfony',
                    'Desenvolvi o conceito inicial do sistema de Feirão Online'
                ]
            },
            {
                key: 'digitalhub',
                startDate: new Date(2019, 5),
                endDate: new Date(2020, 1),
                location: 'Curitiba, Paraná',
                title: 'Desenvolvedor Backend/Magento 2',
                company: 'DigitalHub',
                companyUrl: 'https://www.digitalhub.com.br/',
                description: [
                    'Fiz correções nos módulos já existentes para Magento 2',
                    'Desenvolvi módulos de integração com transportadoras para obter o valor de frete para os produtos',
                    'Desenvolvi um hotsite para um dos clientes, com landing page e painel administrativo desenvolvidos em Symfony 4',
                    'Fiz uma reescrita na lógica de uma página de checkout que precisava de correções']
            },
            {
                key: 'crediok',
                startDate: new Date(2018, 5),
                endDate: new Date(2019, 3),
                location: 'Curitiba, Paraná',
                title: 'Analista de Suporte',
                company: 'CrediOK',
                companyUrl: 'https://crediok.com.br/',
                description: [
                    'Fiz a reescrita da API de relatórios, migrando de Silex para Symfony',
                    'Fiz a reescrita do sistema de relatórios, migrando de CodeIgniter para Symfony',
                    'Comecei a desenvolver o sistema de chamado, baseado em Symfony e MongoDB',
                    'Prestava suporte técnico aos outros funcionários',
                    'Participei de um projeto de migração dos ramais de telefone da central analógica para a plataforma Nexcore'
                ]
            },
            {
                key: 'centralserver',
                startDate: new Date(2017, 2),
                endDate: new Date(2017, 4),
                location: 'Curitiba, Paraná',
                title: 'Administrador de sistemas',
                company: 'CentralServer',
                companyUrl: 'https://www.centralserver.com/br/',
                description: [
                    'Prestei suporte técnico receptivo via telefone aos clientes',
                    'Baseado nas demandas, verificava os arquivos dos clientes atrás de problemas ou potenciais invasões',
                    'Realizava análise dos registros de acessos atrás de atividades suspeitas'
                ]
            },
            {
                key: 'quality',
                startDate: new Date(2015, 6),
                endDate: new Date(2017, 1),
                location: 'Curitiba, Paraná',
                title: 'Suporte Técnico N2',
                company: 'Quality',
                companyUrl: 'https://quality.com.br/',
                description: [
                    'Prestei suporte aos usuários presencialmente, realizando manutenção de computadores e periféricos',
                    'Instalava leitores biométricos (digital) e de cartões magnéticos para os clientes',
                    'Fazia manutenção em computadores, trocando componentes conforme necessário e formatando com base em uma imagem pronta',
                ]
            },
            {
                key: 'novageracao',
                startDate: new Date(2014, 10),
                endDate: new Date(2015, 5),
                location: 'Curitiba, Paraná',
                title: 'Analista de TI Jr.',
                company: 'Distribuidora Nova Geração',
                companyUrl: 'https://www.distribuidoranovageracao.com.br/',
                description: [
                    'Prestei suporte técnico aos usuários internamente',
                    'Fazia a configuração dos celulares que os vendendores usavam, instalando o sistema da empresa'
                ]
            },
            {
                key: 'dombosco',
                startDate: new Date(2012, 10),
                endDate: new Date(2016, 14),
                location: 'Curitiba, Paraná',
                title: 'Monitor de informática',
                company: 'Colégio Dom Bosco',
                companyUrl: 'https://www.distribuidoranovageracao.com.br/',
                description: [
                    'Fiz a monitoria do laboratório de informática da escola, gerenciando aproximadamente 30 computadores',
                    'Auxiliava os professores em sala com equipamentos de informática',
                    'Auxiliava os alunos com os equipamentos da escola, que eram fornecidos durante as aulas',
                ]
            }
        ]
    };
}