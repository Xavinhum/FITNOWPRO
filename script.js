const QUIZ_CONFIG = [
    {
        id: 'age_range',
        type: 'radio_image',
        title: { pt: 'CONSTRUA SEU CORPO PERFEITO', en: 'BUILD YOUR PERFECT BODY' },
        subtitle: { pt: 'De acordo com a sua idade e IMC', en: 'According to your age and BMI' },
        options: [
            { label: { pt: 'Idade: dos 18 aos 29 anos', en: 'Age: 18 to 29 years' }, value: '18-29', image: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=400&q=80' },
            { label: { pt: 'Idade: dos 30 aos 39 anos', en: 'Age: 30 to 39 years' }, value: '30-39', image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=400&q=80' },
            { label: { pt: 'Idade: dos 40 aos 49 anos', en: 'Age: 40 to 49 years' }, value: '40-49', image: 'https://images.unsplash.com/photo-1548690312-e3b507d8c110?auto=format&fit=crop&w=400&q=80' },
            { label: { pt: 'Idade: 50 anos ou mais', en: 'Age: 50 or over' }, value: '50+', image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=400&q=80' }
        ],
        showLegal: true
    },
    {
        id: 'gender',
        type: 'radio_image',
        title: { pt: 'Ajude-nos a personalizar o seu programa', en: 'Help us personalize your program' },
        subtitle: { pt: 'Qual é o seu gênero?', en: 'What is your gender?' },
        options: [
            { label: { pt: 'Masculino 👨', en: 'Male 👨' }, value: 'male', image: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=400&q=80' },
            { label: { pt: 'Feminino 👩', en: 'Female 👩' }, value: 'female', image: 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&w=400&q=80' }
        ]
    },
    {
        id: 'body_type',
        type: 'radio_image',
        title: { pt: 'Tipo de Corpo Atual', en: 'Current Body Type' },
        subtitle: { pt: 'Como você avalia seu físico atual?', en: 'How do you evaluate your current physique?' },
        options: [
            { label: { pt: 'Magro', en: 'Skinny' }, value: 'magro', image: 'assets/body_magro.png' },
            { label: { pt: 'Médio', en: 'Average' }, value: 'medio', image: 'assets/body_medio.png' },
            { label: { pt: 'Grande', en: 'Large' }, value: 'grande', image: 'assets/body_grande.png' },
            { label: { pt: 'Pesado', en: 'Heavy' }, value: 'pesado', image: 'assets/body_pesado.png' }
        ]
    },
    {
        id: 'main_goal',
        type: 'radio_text_image',
        title: { pt: 'Objetivo Principal', en: 'Main Goal' },
        subtitle: { pt: 'O que você quer alcançar primeiro?', en: 'What do you want to achieve first?' },
        options: [
            { label: { pt: 'Perder peso', en: 'Lose weight' }, value: 'perder_peso', image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=400&q=80' },
            { label: { pt: 'Ganhar massa muscular', en: 'Build muscle' }, value: 'ganhar_massa', image: 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&w=400&q=80' },
            { label: { pt: 'Ficar musculoso', en: 'Get shredded' }, value: 'ficar_musculoso', image: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=400&q=80' }
        ]
    },
    {
        id: 'desired_body',
        type: 'radio_text',
        title: { pt: 'Corpo Desejado', en: 'Desired Body' },
        subtitle: { pt: 'Qual o shape dos seus sonhos?', en: 'What is your dream shape?' },
        options: [
            { label: { pt: 'Corpo esbelto', en: 'Slim body' }, value: 'corpo_esbelto' },
            { label: { pt: 'Corpo esbelto e musculoso', en: 'Slim and muscular body' }, value: 'corpo_musculoso' },
            { label: { pt: 'Corpo heroico', en: 'Heroic body' }, value: 'corpo_heroico' }
        ]
    },
    {
        id: 'fat_level',
        type: 'radio_text',
        title: { pt: 'Nível de Gordura Corporal', en: 'Body Fat Level' },
        subtitle: { pt: 'Como você estima sua % de gordura hoje?', en: 'How do you estimate your body fat % today?' },
        options: [
            { label: { pt: '5% - 14% (Definido)', en: '5% - 14% (Shredded)' }, value: '5-14' },
            { label: { pt: '15% - 22% (Normal)', en: '15% - 22% (Normal)' }, value: '15-22' },
            { label: { pt: '23% - 30% (Acima do peso)', en: '23% - 30% (Overweight)' }, value: '23-30' },
            { label: { pt: 'Mais de 30% (Avançado)', en: 'Over 30% (Advanced)' }, value: '30+' }
        ]
    },
    {
        id: 'problem_areas',
        type: 'checkbox',
        title: { pt: 'Áreas Problemáticas', en: 'Problematic Areas' },
        subtitle: { pt: 'Quais áreas você quer focar ou melhorar?', en: 'Which areas do you want to focus on or improve?' },
        options: [
            { label: { pt: 'Peito', en: 'Chest' }, value: 'peito' },
            { label: { pt: 'Abdômen', en: 'Abs' }, value: 'abdomen' },
            { label: { pt: 'Braços', en: 'Arms' }, value: 'bracos' },
            { label: { pt: 'Pernas', en: 'Legs' }, value: 'pernas' },
            { label: { pt: 'Costas', en: 'Back' }, value: 'costas' }
        ]
    },
    {
        id: 'nutrition_info',
        type: 'info',
        title: { pt: 'CONSTÂNCIA É A CHAVE', en: 'CONSISTENCY IS KEY' },
        subtitle: { pt: '81% dos seus resultados em casa dependem do seu esforço diário.', en: '81% of your home results depend on your daily effort.' },
        text: { pt: 'Nossos planos incluem um <br><b>guia de treinos personalizados</b> feito por especialistas.<br><br>Preparado para mudar sua rotina?', en: 'Our plans include a <br><b>personalized workout guide</b> crafted by experts.<br><br>Ready to change your routine?' }
    },
    {
        id: 'diet',
        type: 'radio_text',
        title: { pt: 'Preferências de Dieta', en: 'Diet Preferences' },
        subtitle: { pt: 'Você segue alguma dieta específica?', en: 'Do you follow a specific diet?' },
        options: [
            { label: { pt: 'Vegetariano 🥗', en: 'Vegetarian 🥗' }, value: 'vegetariano' },
            { label: { pt: 'Vegano 🥦', en: 'Vegan 🥦' }, value: 'vegano' },
            { label: { pt: 'Keto 🥩', en: 'Keto 🥩' }, value: 'keto' },
            { label: { pt: 'Nenhuma 🍔', en: 'None 🍔' }, value: 'nenhuma' }
        ]
    },
    {
        id: 'sugar_intake',
        type: 'radio_text',
        title: { pt: 'Consumo de Açúcar', en: 'Sugar Intake' },
        subtitle: { pt: 'Com que frequência você consome doces?', en: 'How often do you consume sweets?' },
        options: [
            { label: { pt: 'Quase todos os dias', en: 'Almost every day' }, value: 'todos_dias' },
            { label: { pt: '1x a 2x por semana', en: '1-2 times a week' }, value: 'vezes_semana' },
            { label: { pt: 'Raramente ou nunca', en: 'Rarely or never' }, value: 'raramente' }
        ]
    },
    {
        id: 'water_intake',
        type: 'radio_text',
        title: { pt: 'Consumo de Água', en: 'Water Intake' },
        subtitle: { pt: 'Quantos copos de água você bebe por dia?', en: 'How many glasses of water do you drink per day?' },
        options: [
            { label: { pt: 'Menos de 2 copos 💧', en: 'Less than 2 glasses 💧' }, value: 'menos_2' },
            { label: { pt: '2-6 copos 💧💧', en: '2-6 glasses 💧💧' }, value: '2_6_copos' },
            { label: { pt: '7-10 copos 💧💧💧', en: '7-10 glasses 💧💧💧' }, value: '7_10_copos' },
            { label: { pt: 'Mais de 10 copos 🌊', en: 'More than 10 glasses 🌊' }, value: 'mais_10' }
        ]
    },
    {
        id: 'exercise_freq',
        type: 'radio_text',
        title: { pt: 'Frequência de Exercícios', en: 'Exercise Frequency' },
        subtitle: { pt: 'No mês passado, quantas vezes você treinou por semana?', en: 'In the past month, how many times did you train per week?' },
        options: [
            { label: { pt: 'Não treinei', en: 'Did not train' }, value: 'nao_treinei' },
            { label: { pt: '1-2 vezes por semana', en: '1-2 times a week' }, value: '1_2_vezes' },
            { label: { pt: '3-5 vezes por semana', en: '3-5 times a week' }, value: '3_5_vezes' },
            { label: { pt: 'Mais de 5 vezes por semana', en: 'More than 5 times a week' }, value: 'mais_5' }
        ]
    },
    {
        id: 'height',
        type: 'input_number',
        title: { pt: 'Sua Altura', en: 'Your Height' },
        subtitle: { pt: 'Digite sua altura em centímetros', en: 'Enter your height in centimeters' },
        placeholder: { pt: 'Ex: 180', en: 'Ex: 180' }
    },
    {
        id: 'weight',
        type: 'input_number',
        title: { pt: 'Peso Atual', en: 'Current Weight' },
        subtitle: { pt: 'Digite o seu peso atual em quilos (kg)', en: 'Enter your current weight in kilograms (kg)' },
        placeholder: { pt: 'Ex: 75', en: 'Ex: 75' }
    },
    {
        id: 'target_weight',
        type: 'input_number',
        title: { pt: 'Peso Desejado', en: 'Target Weight' },
        subtitle: { pt: 'Onde você quer chegar em quilos (kg)?', en: 'Where do you want to be in kilograms (kg)?' },
        placeholder: { pt: 'Ex: 85', en: 'Ex: 85' }
    },
    {
        id: 'special_event',
        type: 'radio_text',
        title: { pt: 'Evento Importante', en: 'Special Event' },
        subtitle: { pt: 'Você está se preparando para algum evento?', en: 'Are you preparing for any upcoming event?' },
        options: [
            { label: { pt: 'Férias ⛱️', en: 'Vacation ⛱️' }, value: 'ferias' },
            { label: { pt: 'Casamento 💍', en: 'Wedding 💍' }, value: 'casamento' },
            { label: { pt: 'Viagem ✈️', en: 'Travel ✈️' }, value: 'viagem' },
            { label: { pt: 'Nenhum evento especial 🚫', en: 'No special event 🚫' }, value: 'nenhum' }
        ]
    },
    {
        id: 'chart_prediction',
        type: 'dynamic_chart'
    },
    {
        id: 'fitness_level',
        type: 'radio_text',
        title: { pt: 'Condicionamento Físico', en: 'Fitness Level' },
        subtitle: { pt: 'Como você se avalia?', en: 'How do you evaluate yourself?' },
        options: [
            { label: { pt: 'Iniciante (Pouca ou nenhuma atividade)', en: 'Beginner (Little or no activity)' }, value: 'iniciante' },
            { label: { pt: 'Amador (Ativo moderadamente)', en: 'Amateur (Moderately active)' }, value: 'amador' },
            { label: { pt: 'Avançado (Muita experiência)', en: 'Advanced (Lot of experience)' }, value: 'avancado' }
        ]
    },
    {
        id: 'sports',
        type: 'checkbox',
        title: { pt: 'Interesses Esportivos', en: 'Sports Interests' },
        subtitle: { pt: 'Quais desses esportes você gosta?', en: 'Which of these sports do you like?' },
        options: [
            { label: { pt: 'Musculação na academia', en: 'Gym workouts' }, value: 'academia' },
            { label: { pt: 'Treinos em casa', en: 'Home workouts' }, value: 'casa' },
            { label: { pt: 'Boxe / Lutas', en: 'Boxing / Fights' }, value: 'lutas' },
            { label: { pt: 'Futebol', en: 'Football/Soccer' }, value: 'futebol' },
            { label: { pt: 'Tênis', en: 'Tennis' }, value: 'tenis' }
        ]
    },
    {
        id: 'previous_problems',
        type: 'radio_text',
        title: { pt: 'Problemas Anteriores', en: 'Previous Problems' },
        subtitle: { pt: 'O que mais te atrapalhou em tentativas passadas?', en: 'What hindered you the most in past attempts?' },
        options: [
            { label: { pt: 'Falta de motivação', en: 'Lack of motivation' }, value: 'motivacao' },
            { label: { pt: 'Falta de um plano claro', en: 'Lack of a clear plan' }, value: 'sem_plano' },
            { label: { pt: 'Treinos muito difíceis', en: 'Workouts too hard' }, value: 'dificeis' },
            { label: { pt: 'Nenhum dos anteriores', en: 'None of the above' }, value: 'nenhum' }
        ]
    },
    {
        id: 'pain_areas',
        type: 'checkbox',
        title: { pt: 'Dores ou Lesões', en: 'Pains or Injuries' },
        subtitle: { pt: 'Você sente dor em alguma destas áreas?', en: 'Do you feel pain in any of these areas?' },
        options: [
            { label: { pt: 'Joelhos', en: 'Knees' }, value: 'joelhos' },
            { label: { pt: 'Pescoço / Cervical', en: 'Neck / Cervical' }, value: 'pescoco' },
            { label: { pt: 'Lombar', en: 'Lower back' }, value: 'lombar' },
            { label: { pt: 'Nenhuma dor', en: 'No pain' }, value: 'nenhuma' }
        ]
    },
    {
        id: 'additional_goals',
        type: 'checkbox',
        title: { pt: 'Objetivos Adicionais', en: 'Additional Goals' },
        subtitle: { pt: 'Além do físico, o que mais você busca melhorar?', en: 'Besides the physical, what else do you seek to improve?' },
        options: [
            { label: { pt: 'Reduzir estresse', en: 'Reduce stress' }, value: 'estresse' },
            { label: { pt: 'Melhorar o sono', en: 'Improve sleep' }, value: 'sono' },
            { label: { pt: 'Aumentar a energia', en: 'Increase energy' }, value: 'energia' },
            { label: { pt: 'Autoestima', en: 'Self-esteem' }, value: 'autoestima' }
        ]
    },
    {
        id: 'health_warning',
        type: 'info',
        image: 'assets/health_warning.png',
        title: { pt: 'Nós nos preocupamos com a sua saúde', en: 'We care about your health' },
        subtitle: { pt: '', en: '' },
        text: { 
            pt: `
                <p class="health-intro">Se você tiver alguma das seguintes condições:</p>
                <ul class="health-list">
                    <li>Doença cardíaca</li>
                    <li>Escoliose grave</li>
                    <li>Lesões na coluna vertebral</li>
                    <li>Tumor benigno ou maligno</li>
                    <li>Hipertensão</li>
                </ul>
                <p class="health-disclaimer-info">Entre em contato com seu médico antes de começar a seguir o programa <b>FITNOWPRO</b>.</p>
            `, 
            en: `
                <p class="health-intro">If you have any of the following conditions:</p>
                <ul class="health-list">
                    <li>Heart disease</li>
                    <li>Severe scoliosis</li>
                    <li>Spinal injuries</li>
                    <li>Benign or malignant tumor</li>
                    <li>Hypertension</li>
                </ul>
                <p class="health-disclaimer-info">Please consult your doctor before starting the <b>FITNOWPRO</b> program.</p>
            ` 
        }
    },
    {
        id: 'pushups',
        type: 'radio_text',
        title: { pt: 'Capacidade Física: Flexões', en: 'Physical Capacity: Push-ups' },
        subtitle: { pt: 'Quantas flexões seguidas você consegue fazer?', en: 'How many consecutive push-ups can you do?' },
        options: [
            { label: { pt: 'Menos de 10', en: 'Less than 10' }, value: '<10' },
            { label: { pt: '10 a 20', en: '10 to 20' }, value: '10-20' },
            { label: { pt: '21 a 40', en: '21 to 40' }, value: '21-40' },
            { label: { pt: 'Mais de 40', en: 'More than 40' }, value: '>40' }
        ]
    },
    {
        id: 'pullups',
        type: 'radio_text',
        title: { pt: 'Capacidade Física: Pull-ups', en: 'Physical Capacity: Pull-ups' },
        subtitle: { pt: 'E barras fixas (pull-ups)?', en: 'And pull-ups?' },
        options: [
            { label: { pt: 'Nenhuma', en: 'None' }, value: '0' },
            { label: { pt: '1 a 5', en: '1 to 5' }, value: '1-5' },
            { label: { pt: '6 a 10', en: '6 to 10' }, value: '6-10' },
            { label: { pt: 'Mais de 10', en: 'More than 10' }, value: '>10' }
        ]
    },
    {
        id: 'workout_location',
        type: 'radio_text',
        title: { pt: 'Local de Treino Principal', en: 'Main Workout Location' },
        subtitle: { pt: 'Onde você planeja treinar?', en: 'Where do you plan to train?' },
        options: [
            { label: { pt: 'Casa', en: 'Home' }, value: 'casa' },
            { label: { pt: 'Academia', en: 'Gym' }, value: 'academia' },
            { label: { pt: 'Misto (Ambos)', en: 'Mixed (Both)' }, value: 'misto' }
        ]
    },
    {
        id: 'equipment',
        type: 'radio_text',
        title: { pt: 'Equipamentos Disponíveis', en: 'Available Equipment' },
        subtitle: { pt: 'Você possui equipamentos?', en: 'Do you have equipment?' },
        options: [
            { label: { pt: 'Básico (halteres, elásticos)', en: 'Basic (dumbbells, bands)' }, value: 'basico' },
            { label: { pt: 'Completo (máquinas, barras)', en: 'Full (machines, bars)' }, value: 'completo' },
            { label: { pt: 'Sem equipamento (peso do corpo)', en: 'No equipment (body weight)' }, value: 'nenhum' }
        ]
    },
    {
        id: 'workout_duration',
        type: 'radio_text',
        title: { pt: 'Duração do Treino', en: 'Workout Duration' },
        subtitle: { pt: 'Quanto tempo por dia você tem disponível?', en: 'How much time per day do you have available?' },
        options: [
            { label: { pt: '10 a 15 minutos', en: '10 to 15 minutes' }, value: '10_15' },
            { label: { pt: '20 a 30 minutos', en: '20 to 30 minutes' }, value: '20_30' },
            { label: { pt: '30 a 40 minutos', en: '30 to 40 minutes' }, value: '30_40' },
            { label: { pt: '40 a 60 minutos', en: '40 to 60 minutes' }, value: '40_60' }
        ]
    },
    {
        id: 'challenge',
        type: 'radio_text',
        title: { pt: 'Escolha seu Desafio', en: 'Choose Your Challenge' },
        subtitle: { pt: 'Acelere seus resultados com um desafio extra:', en: 'Accelerate your results with an extra challenge:' },
        options: [
            { label: { pt: 'Desafio Full Body (Corpo Todo)', en: 'Full Body Challenge' }, value: 'full_body' },
            { label: { pt: 'Desafio Seca Barriga', en: 'Belly Fat Burn Challenge' }, value: 'seca_barriga' }
        ]
    },
    {
        id: 'name',
        type: 'input_text',
        title: { pt: 'Qual o seu nome?', en: 'What is your name?' },
        subtitle: { pt: 'Para personalizarmos seu relatório', en: 'To personalize your report' },
        placeholder: { pt: 'Digite seu primeiro nome', en: 'Enter your first name' }
    },
    {
        id: 'email',
        type: 'input_email',
        title: { pt: 'Para onde enviamos o seu plano?', en: 'Where should we send your plan?' },
        subtitle: { pt: 'Insira o seu email para salvar o progresso', en: 'Enter your email to save your progress' },
        placeholder: { pt: 'Seu melhor e-mail', en: 'Your best email' }
    },
    {
        id: 'loading',
        type: 'loading',
        title: { pt: 'ANALISANDO SEU PERFIL', en: 'ANALYZING YOUR PROFILE' },
        subtitle: { pt: 'Calculando a melhor rota para o seu objetivo...', en: 'Calculating the best route for your goal...' }
    }
];

const TRANSLATIONS = {
    pt: {
        continue_btn: "Continuar",
        understand_btn: "Entendi",
        alert_select: "Selecione pelo menos uma opção!",
        alert_fill: "Por favor, preencha o campo.",
        legal: "Ao continuar, você concorda com nossos <a href='#'>Termos de serviço</a> e reconhece nossa <a href='#'>Política de privacidade</a> e <a href='#'>Política de cookies</a>"
    },
    en: {
        continue_btn: "Continue",
        understand_btn: "Got it",
        alert_select: "Please select at least one option!",
        alert_fill: "Please fill in the field.",
        legal: "By continuing, you agree to our <a href='#'>Terms of Service</a> and acknowledge our <a href='#'>Privacy Policy</a> and <a href='#'>Cookie Policy</a>"
    }
};

class QuizEngine {
    constructor(config) {
        this.config = config;
        this.lang = 'pt';
        this.currentIndex = 0;
        this.answers = {};
        
        this.container = document.getElementById('quiz-container');
        this.progressBar = document.getElementById('progress-bar');
        this.backBtn = document.getElementById('back-btn');
        this.langToggle = document.getElementById('lang-toggle');
        this.langLabel = document.getElementById('lang-label');
        this.isTransitioning = false;
        
        this.init();
    }

    init() {
        this.backBtn.addEventListener('click', () => this.prevStep());
        this.langToggle.addEventListener('click', () => this.toggleLanguage());
        this.renderAllSteps();
        this.updateView();
    }

    toggleLanguage() {
        this.lang = this.lang === 'pt' ? 'en' : 'pt';
        this.langLabel.textContent = this.lang === 'pt' ? 'Português' : 'English';
        
        // Re-render and keep the current view
        this.renderAllSteps();
        this.updateView();
    }

    renderAllSteps() {
        this.container.innerHTML = '';
        this.config.forEach((step, index) => {
            const el = document.createElement('div');
            el.className = 'step-container';
            el.id = `step-${index}`;
            el.innerHTML = this.getStepHTML(step);
            this.container.appendChild(el);
            this.bindStepEvents(el, step, index);
        });
    }

    getStepHTML(step) {
        const text = TRANSLATIONS[this.lang];

        if (step.type === 'loading') {
            return `
                <div class="loading-wrapper content-inner">
                    <h1 class="main-title">${step.title[this.lang]}</h1>
                    <p class="sub-title" id="loading-msg">${step.subtitle[this.lang]}</p>
                    <div class="circular-progress-wrapper" style="margin-top: 40px; position:relative; display:flex; justify-content:center;">
                        <svg class="progress-ring" width="160" height="160" style="transform: rotate(-90deg); transform-origin: 50% 50%;">
                            <circle class="progress-ring__circle_bg" stroke="var(--color-black80)" stroke-width="12" fill="transparent" r="70" cx="80" cy="80"/>
                            <circle class="progress-ring__circle" stroke="var(--color-primary)" stroke-width="12" stroke-linecap="round" fill="transparent" r="70" cx="80" cy="80" stroke-dasharray="439.82" stroke-dashoffset="439.82" id="loading-ring" style="transition: stroke-dashoffset 0.1s linear;"/>
                        </svg>
                        <span id="loading-pct" style="position:absolute; top:50%; left:50%; transform:translate(-50%, -50%); font-size: 32px; font-weight:800; color:var(--color-white);">0%</span>
                    </div>
                </div>
            `;
        }

        if (step.type === 'info') {
            return `
                <div class="content-inner">
                    ${step.image ? `<div class="info-top-image-wrapper"><img src="${step.image}" alt=""></div>` : ''}
                    <h1 class="main-title">${step.title[this.lang]}</h1>
                    ${step.subtitle && step.subtitle[this.lang] ? `<p class="sub-title">${step.subtitle[this.lang]}</p>` : ''}
                    <div class="info-text">${step.text[this.lang]}</div>
                    <div class="continue-wrapper">
                        <button class="btn-primary" data-action="continue">${text.understand_btn}</button>
                    </div>
                </div>
            `;
        }

        if (step.type === 'dynamic_chart') {
            const currentWeight = parseFloat(this.answers['weight'] || 80);
            const targetWeight = parseFloat(this.answers['target_weight'] || 70);
            const isUp = targetWeight > currentWeight;
            
            const today = new Date();
            const future = new Date();
            future.setDate(today.getDate() + 60);
            
            const formatDate = (date, lang) => {
                const options = { year: 'numeric', month: 'short', day: 'numeric' };
                const locale = lang === 'pt' ? 'pt-BR' : 'en-US';
                return date.toLocaleDateString(locale, options).replace('.', '');
            };
            
            const todayStr = formatDate(today, this.lang);
            const futureStr = formatDate(future, this.lang);

            const t = {
                pt: {
                    title: `O último plano de que você precisará para <span class="highlight">finalmente entrar</span> em forma`,
                    desc: `Com base em nossos cálculos, acreditamos que você poderá atingir seu objetivo de peso de <b>${targetWeight} kg</b> até`,
                    disclaimer: `Este gráfico é apenas para fins ilustrativos`
                },
                en: {
                    title: `The last plan you will ever need to <span class="highlight">finally get</span> in shape`,
                    desc: `Based on our calculations, we believe you can reach your weight goal of <b>${targetWeight} kg</b> by`,
                    disclaimer: `This chart is for illustrative purposes only`
                }
            }[this.lang];

            const w = 400; const h = 200;
            const startX = 20, endX = 380;
            const startY = isUp ? 160 : 40;
            const endY = isUp ? 40 : 160;
            
            const cp1X = 150, cp1Y = startY;
            const cp2X = 250, cp2Y = endY;

            const pathD = `M ${startX} ${startY} C ${cp1X} ${cp1Y}, ${cp2X} ${cp2Y}, ${endX} ${endY}`;
            const pathFillD = `${pathD} L ${endX} ${h} L ${startX} ${h} Z`;

            const startLeft = (startX / w) * 100;
            const startTop = (startY / h) * 100;
            const endLeft = (endX / w) * 100;
            const endTop = (endY / h) * 100;
            
            // fix edge clamping
            const startBadgeClass = 'start-badge ' + (startX < 40 ? 'is-left' : '');
            const endBadgeClass = 'target-badge ' + (endX > 360 ? 'is-right' : '');

            return `
                <div class="content-inner">
                    <h1 class="chart-title-wrapper">${t.title}</h1>
                    <p class="chart-desc">${t.desc}</p>
                    <div class="chart-date-target"><span>${futureStr}</span></div>

                    <div class="chart-svg-wrapper">
                        <svg class="chart-svg" viewBox="0 0 ${w} ${h}" preserveAspectRatio="none">
                            <defs>
                                <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="0%" stop-color="var(--color-primary)" stop-opacity="0.3"></stop>
                                    <stop offset="100%" stop-color="var(--color-black100)" stop-opacity="0"></stop>
                                </linearGradient>
                            </defs>
                            <path class="chart-area" d="${pathFillD}"></path>
                            <path class="chart-path" d="${pathD}"></path>
                            <circle class="chart-point" cx="${startX}" cy="${startY}" r="5"></circle>
                            <circle class="chart-point" cx="${endX}" cy="${endY}" r="5"></circle>
                        </svg>

                        <div class="chart-badge ${startBadgeClass}" style="left: ${startLeft}%; top: ${startTop}%;">
                            ${currentWeight} kg
                        </div>
                        <div class="chart-badge ${endBadgeClass}" style="left: ${endLeft}%; top: ${endTop}%;">
                            ${targetWeight} kg
                        </div>
                    </div>

                    <div class="chart-bottom-labels">
                        <span>${todayStr}</span>
                        <span>${futureStr}</span>
                    </div>

                    <p class="chart-disclaimer">${t.disclaimer}</p>

                    <div class="continue-wrapper">
                        <button class="btn-primary" data-action="continue">${text.understand_btn}</button>
                    </div>
                </div>
            `;
        }

        let optionsHTML = '';
        if (step.type.includes('radio') || step.type === 'checkbox') {
            const isGrid = step.type === 'radio_image' ? 'grid-2' : '';
            const isRadioTextImage = step.type === 'radio_text_image';
            let cardClassBase = step.type === 'radio_image' ? 'image-card' : 'text-card';
            if (isRadioTextImage) { cardClassBase = 'text-card inline-img-card'; }
            
            const extraClass = step.type === 'checkbox' ? 'checkbox-card' : '';
            const inputType = step.type === 'checkbox' ? 'checkbox' : 'radio';

            // Check if we previously answered this to preserve state on language change
            const isAnswered = this.answers[step.id];

            optionsHTML = `<div class="choices-container ${isGrid}">`;
            step.options.forEach(opt => {
                let checkedStr = '';
                let selectedClass = '';
                if (isAnswered) {
                    if (Array.isArray(isAnswered) && isAnswered.includes(opt.value)) { checkedStr = 'checked'; selectedClass = 'selected'; }
                    if (!Array.isArray(isAnswered) && isAnswered === opt.value) { checkedStr = 'checked'; selectedClass = 'selected'; }
                }

                optionsHTML += `
                    <label class="choice-card ${cardClassBase} ${extraClass} ${selectedClass}" tabindex="0" data-value="${opt.value}">
                        <input type="${inputType}" name="${step.id}" value="${opt.value}" ${checkedStr}>
                        ${opt.image && step.type === 'radio_image' ? `
                        <div class="choice-img-wrapper">
                            <img src="${opt.image}" alt="${opt.label[this.lang]}">
                        </div>` : ''}
                        <div class="choice-content">
                            <p class="choice-text">${opt.label[this.lang]}</p>
                            ${!isRadioTextImage ? '<span class="check-icon"></span>' : ''}
                        </div>
                        ${isRadioTextImage && opt.image ? `<img src="${opt.image}" class="inline-card-img" alt="">` : ''}
                    </label>
                `;
            });
            optionsHTML += `</div>`;

            if (step.type === 'checkbox') {
                 optionsHTML += `
                    <div class="continue-wrapper">
                        <button class="btn-primary" data-action="continue">${text.continue_btn}</button>
                    </div>
                 `;
            }
        }

        if (step.type.startsWith('input_')) {
            let inputType = 'text';
            if (step.type === 'input_number') inputType = 'number';
            if (step.type === 'input_email') inputType = 'email';
            const val = this.answers[step.id] || '';
            optionsHTML = `
                <div class="input-wrapper">
                    <input type="${inputType}" class="input-field" placeholder="${step.placeholder[this.lang] || ''}" name="${step.id}" value="${val}" />
                </div>
                <div class="continue-wrapper">
                    <button class="btn-primary" data-action="continue">${text.continue_btn}</button>
                </div>
            `;
        }

        const legalHTML = step.showLegal ? `
            <div class="legal-text">
                <p>${text.legal}</p>
            </div>
        ` : '';

        return `
            <div class="content-inner">
                <h1 class="main-title">${step.title[this.lang]}</h1>
                ${step.subtitle ? `<p class="sub-title">${step.subtitle[this.lang]}</p>` : ''}
                ${optionsHTML}
                ${legalHTML}
            </div>
        `;
    }

    bindStepEvents(el, step, index) {
        if (step.type.startsWith('radio_')) {
            const cards = el.querySelectorAll('.choice-card');
            cards.forEach(card => {
                card.addEventListener('click', (e) => {
                    e.preventDefault(); // Prevents double click firing from native label-input behavior
                    if (this.isTransitioning) return; // Prevent fast double clicking

                    cards.forEach(c => {
                        c.classList.remove('selected');
                        c.querySelector('input').checked = false;
                    });
                    
                    card.classList.add('selected');
                    const radio = card.querySelector('input');
                    radio.checked = true;

                    this.answers[step.id] = card.dataset.value;

                    this.isTransitioning = true;
                    setTimeout(() => {
                        this.nextStep();
                        this.isTransitioning = false;
                    }, 350);
                });

                card.addEventListener('keydown', (e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        card.click();
                    }
                });
            });
        }

        if (step.type === 'checkbox') {
            const cards = el.querySelectorAll('.choice-card');
            cards.forEach(card => {
                card.addEventListener('click', (e) => {
                    e.preventDefault();
                    const input = card.querySelector('input');
                    input.checked = !input.checked;

                    if (input.checked) {
                        card.classList.add('selected');
                    } else {
                        card.classList.remove('selected');
                    }
                });
                card.addEventListener('keydown', (e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        card.click();
                    }
                });
            });
        }

        const btn = el.querySelector('button[data-action="continue"]');
        const text = TRANSLATIONS[this.lang];
        if (btn) {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                if (this.isTransitioning) return;

                if (step.type === 'checkbox') {
                    const checked = Array.from(el.querySelectorAll('input:checked')).map(i => i.value);
                    if (checked.length === 0) {
                        alert(text.alert_select);
                        return;
                    }
                    this.answers[step.id] = checked;
                }
                
                if (step.type.startsWith('input_')) {
                    const inputField = el.querySelector('input');
                    const val = inputField.value;
                    if (!val.trim()) {
                        alert(text.alert_fill);
                        return;
                    }
                    this.answers[step.id] = val;
                }
                
                this.isTransitioning = true;
                this.nextStep();
                setTimeout(() => {
                    this.isTransitioning = false;
                }, 400);
            });
        }
    }

    updateView(direction = 'next') {
        const steps = this.container.querySelectorAll('.step-container');
        
        steps.forEach((el, index) => {
            if (index === this.currentIndex) {
                el.className = 'step-container active';
            } else if (index < this.currentIndex) {
                el.className = 'step-container exit-left';
            } else {
                el.className = 'step-container exit-right';
            }
        });

        const totalSteps = this.config.filter(s => s.type !== 'loading').length;
        const currentProgressStep = Math.min(this.currentIndex, totalSteps);
        const progressPercentage = ((currentProgressStep) / totalSteps) * 100;
        this.progressBar.style.width = `${progressPercentage}%`;

        if (this.currentIndex > 0 && this.config[this.currentIndex].type !== 'loading') {
            this.backBtn.classList.remove('hide');
        } else {
            this.backBtn.classList.add('hide');
        }

        if (this.config[this.currentIndex].type === 'loading') {
            this.handleLoadingStep();
        }
    }

    nextStep() {
        if (this.currentIndex < this.config.length - 1) {
            this.currentIndex++;
            this.updateView('next');
        } else {
            this.finishQuiz();
        }
    }

    prevStep() {
        if (this.currentIndex > 0) {
            this.currentIndex--;
            this.updateView('prev');
        }
    }

    handleLoadingStep() {
        const ring = document.getElementById('loading-ring');
        const pctText = document.getElementById('loading-pct');
        const msgText = document.getElementById('loading-msg');
        if (!ring) return;
        
        const msgsPt = ["Calculando metabolismo...", "Analisando histórico...", "Ajustando metas de peso...", "Montando guia personalizado...", "Finalizando seu perfil..."];
        const msgsEn = ["Calculating metabolism...", "Analyzing history...", "Adjusting weight goals...", "Building personalized guide...", "Finalizing your profile..."];
        const msgs = this.lang === 'pt' ? msgsPt : msgsEn;

        const circumference = 439.82;
        let start = null;
        const duration = 5000;

        const animate = (timestamp) => {
            if (!start) start = timestamp;
            const elapsed = timestamp - start;
            const progress = Math.min(elapsed / duration, 1);
            
            const pct = Math.floor(progress * 100);
            pctText.textContent = `${pct}%`;
            
            const offset = circumference - (progress * circumference);
            ring.style.strokeDashoffset = offset;

            const msgIndex = Math.min(Math.floor(progress * 5), 4);
            msgText.textContent = msgs[msgIndex];

            if (progress < 1) {
                requestAnimationFrame(animate);
            } else {
                setTimeout(() => this.finishQuiz(), 400);
            }
        };

        requestAnimationFrame(animate);
    }

    finishQuiz() {
        console.log('Quiz Finished! Answers:', this.answers);
        
        // Hide quiz and progress
        document.getElementById('quiz-container').classList.add('hide');
        document.getElementById('progress-container').classList.add('hide');
        
        // Setup dashboard math
        const wt = parseFloat(this.answers['weight'] || 80);
        let ht = parseFloat(this.answers['height'] || 175);
        if (ht > 3) ht = ht / 100; // convert cm to m if needed
        const age = parseInt(this.answers['age'] || 30);

        // Calculate BMI
        const bmi = (wt / (ht * ht)).toFixed(1);
        
        // Calculate dynamic fat (heuristic) or fallback
        const fatRaw = (1.20 * bmi + 0.23 * age - 16.2).toFixed(1);
        let fatTarget = (fatRaw - 6.0).toFixed(1); 
        if (fatTarget < 8) fatTarget = 8;
        
        document.getElementById('val-fat-now').textContent = `${fatRaw}%`;
        document.getElementById('val-fat-target').textContent = `${fatTarget}%`;

        // Body age logic
        const bodyAgeBonus = bmi > 25 ? Math.floor(bmi - 25) + 3 : -2;
        const bodyAge = Math.max(18, age + bodyAgeBonus);
        const targetAge = Math.max(18, age - 4);

        document.getElementById('val-age-now').textContent = `${bodyAge}`;
        document.getElementById('val-age-target').textContent = `${targetAge}`;

        // Populate Goals dynamically
        const goalsDiv = document.getElementById('goals-output');
        let selectedGoals = [];
        
        // Try to fetch goals from answers if they exist
        if(this.answers['objetivos']) {
            selectedGoals = Array.isArray(this.answers['objetivos']) ? this.answers['objetivos'] : [this.answers['objetivos']];
        } else if (this.answers['main_goal']){
             selectedGoals = [this.answers['main_goal']];
        }

        const defaultPt = ["Reduzir o estresse", "Sentir-se mais saudável", "Autodisciplina", "Criar um hábito físico", "Melhorar o sono"];
        const defaultEn = ["Reduce stress", "Feel healthier", "Self-discipline", "Build physical habit", "Improve sleep"];
        const pool = this.lang === 'pt' ? defaultPt : defaultEn;

        // Ensure we show at max 5 items, mix chosen with defaults
        let finalGoals = [...new Set([...selectedGoals, ...pool])];
        goalsDiv.innerHTML = '';
        finalGoals.slice(0, 5).forEach(g => {
             const text = typeof g === 'object' ? g[this.lang] || g['pt'] : g;
             goalsDiv.innerHTML += `<div><span class="check-circle" style="color:var(--color-primary); margin-right:6px; font-weight:900;">✔</span> ${text}</div>`;
        });

        // Translate logic if English
        if(this.lang === 'en') {
            document.querySelector('.wheel-title').textContent = "Spin to win up to 90% discount!";
            document.getElementById('spin-btn').textContent = "SPIN THE WHEEL";
            document.getElementById('spin-win-text').textContent = "🎉 You won 90% OFF!";
            document.getElementById('checkout-title-text').textContent = "Your Personal Summary";
            const colHeads = document.querySelectorAll('.col-head');
            if(colHeads.length == 2) { colHeads[0].textContent = "Now"; colHeads[1].textContent = "Your Goal"; }
            const compareLabels = document.querySelectorAll('.compare-label');
            compareLabels.forEach(l => {
                if(l.textContent.includes("Gordura")) l.textContent = "Body Fat";
                if(l.textContent.includes("Idade")) l.textContent = "Fitness Age";
                if(l.textContent.includes("Músculos")) l.textContent = "Body Muscles";
            });
            document.querySelector('.dash-section-title').textContent = "What you get";
            const benTexts = document.querySelectorAll('.benefit-text strong');
            if(benTexts[0]) benTexts[0].textContent = "Structured workout plan";
            if(benTexts[1]) benTexts[1].textContent = "15-30 mins daily plan";
            if(benTexts[2]) benTexts[2].textContent = "Beginner-friendly step by step";
            
            document.querySelector('.dash-section-subtitle').textContent = "Your program goals also include:";
            document.querySelector('.laurel-big').innerHTML = "over 3<br>million";
            document.querySelector('.laurel-sub').textContent = "started their fitness journey with us";
            document.querySelector('.social-review-title').textContent = "Over 200,000 5-star reviews from happy users";
            
            const titles = document.querySelectorAll('.dash-section-title');
            if(titles[1]) titles[1].textContent = "Complete workout plan";
            
            const planLists = document.querySelectorAll('.workout-plan-list p');
            if(planLists[0]) planLists[0].textContent = "Create a habit and develop correct exercise techniques";
            if(planLists[1]) planLists[1].textContent = "Lose excessive body fat and improve workout intensity";
            if(planLists[2]) planLists[2].textContent = "Reach your goal and change your life forever";
            
            document.querySelector('.price-new').textContent = "$9.90";
            document.querySelector('.price-old').textContent = "From $97.00";
            document.querySelector('.price-sub').textContent = "first month only, then $27.00 renewing.";
            document.getElementById('discount-badge').textContent = "90% OFF APPLIED!";
            
            const gts = document.querySelectorAll('.gt-item');
            if(gts[0]) gts[0].innerHTML = `<span style="font-size:20px;">🛡️</span> Unconditional 7-day money-back guarantee`;
            if(gts[1]) gts[1].innerHTML = `<span style="font-size:20px;">⚡</span> Start seeing results in 5 days`;

            document.querySelectorAll('.btn-buy').forEach(b => b.textContent = "GET MY PLAN");
            document.getElementById('sticky-btn').textContent = "GET MY PLAN";
        }

        // Show Spin Page First
        const spinPage = document.getElementById('spin-page');
        spinPage.classList.remove('hide');

        const spinBtn = document.getElementById('spin-btn');
        const wheel = document.getElementById('spin-wheel');
        const winText = document.getElementById('spin-win-text');

        spinBtn.addEventListener('click', () => {
            spinBtn.disabled = true;
            spinBtn.textContent = this.lang === 'en' ? "SPINNING..." : "GIRANDO...";
            
            // Winning slice is #2 (90%). Center is 90deg in CSS. 
            // So we rotate counter-clockwise by exactly 90deg + 5 full rounds.
            const spinAmount = (360 * 5) + 90; 
            wheel.style.transform = `rotate(-${spinAmount}deg)`;
            
            setTimeout(() => {
                spinBtn.classList.add('hide');
                winText.classList.remove('hide');
                document.getElementById('win-segment').style.color = 'var(--color-primary)';
                
                // Auto transition to Dashboard after celebration delay
                setTimeout(() => {
                    spinPage.classList.add('hide'); 
                    document.getElementById('final-dashboard').classList.remove('hide');
                    document.getElementById('sticky-btn').classList.remove('hide');
                    window.scrollTo({ top: 0, behavior: 'instant' });
                }, 2200);

            }, 3600); // 3.6s wheel animation finish time
        });

        // Setup sticky bottom button logic (scroll to pricing anchor)
        const stickyBtn = document.getElementById('sticky-btn');
        stickyBtn.addEventListener('click', (e) => {
            e.preventDefault();
            const anchor = document.getElementById('pricing-anchor');
            if(anchor) {
                anchor.scrollIntoView({behavior: 'smooth'});
            }
        });
    }
}

document.addEventListener('DOMContentLoaded', () => {
    window.app = new QuizEngine(QUIZ_CONFIG);
});
