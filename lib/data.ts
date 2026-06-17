import { IProject } from '@/types';

export const GENERAL_INFO = {
    email: 'inboxme.srinivas@gmail.com',

    emailSubject: "Let's collaborate on a project",
    emailBody: 'Hi this is Srini, I am reaching out to you because...',

    oldPortfolio: 'https://srinivasudhayasankarportfolio.netlify.app',
    upworkProfile: 'https://www.linkedin.com/in/srinivas-udhayasankar/',
};

export const SOCIAL_LINKS = [
    { name: 'github', url: 'https://github.com/cheenusrinivas' },
    {
        name: 'linkedin',
        url: 'https://www.linkedin.com/in/srinivas-udhayasankar/',
    },
    { name: 'facebook', url: '' },
    { name: 'Old Version', url: GENERAL_INFO.oldPortfolio },
];

export const MY_STACK = {
    frontend: [
        { name: 'JavaScript', icon: '/logo/js.png' },
        { name: 'React', icon: '/logo/react.png' },
        { name: 'HTML5', icon: '/logo/html.png' },
        { name: 'CSS3', icon: '/logo/css.png' },
        { name: 'Tailwind CSS', icon: '/logo/tailwind.png' },
        { name: 'Bootstrap', icon: '/logo/bootstrap.svg' },
    ],
    backend: [
        { name: 'Node.js', icon: '/logo/node.png' },
        { name: 'Express.js', icon: '/logo/express.png' },
        { name: 'Python', icon: '/logo/python.png' },
        { name: 'Django', icon: '/logo/django.png' },
    ],
    database: [
        { name: 'MySQL', icon: '/logo/mysql.svg' },
        { name: 'MongoDB', icon: '/logo/mongodb.svg' },
        { name: 'SQLite', icon: '/logo/sqlite.png' },
    ],
    tools: [
        {
            name: 'Git',
            icon: '/logo/git.png',
        },
        {
            name: 'AWS',
            icon: '/logo/aws.png',
        },
        {
            name: 'socket.io',
            icon: '/logo/socket.io.png',
        },
    ],
};

export const PROJECTS: IProject[] = [
    {
        title: 'Visual Genie — AI Image Captioning',
        slug: 'visual-genie',
        liveUrl: 'https://github.com/cheenusrinivas/Visual-Genie',
        year: 2025,
        description: `
      MSc Dissertation project — a full-stack AI web application that generates natural language captions for uploaded images using a fine-tuned BLIP transformer model.<br/><br/>

      Key Features:<br/>
      <ul>
        <li>🧠 Fine-tuned BLIP model on Flickr30k dataset (2000 images)</li>
        <li>🖼️ Upload any image and get an AI-generated caption instantly</li>
        <li>🌐 Full Django web interface for easy interaction</li>
        <li>⚡ PyTorch + HuggingFace Transformers backend</li>
        <li>📱 Responsive design for all devices</li>
      </ul><br/>

      Technical Highlights:
      <ul>
        <li>Fine-tuned Salesforce BLIP model using AdamW optimizer</li>
        <li>Trained on GPU (CUDA) in Google Colab</li>
        <li>Deployed via Django with SQLite database</li>
        <li>Multi-modal AI combining vision and language understanding</li>
      </ul>
      `,
        role: `
      Solo Developer & Researcher<br/>
      <ul>
        <li>✅ Fine-tuned BLIP transformer model on custom dataset</li>
        <li>🎨 Built Django web app frontend and backend</li>
        <li>🔄 Integrated PyTorch model into Django views</li>
        <li>🚀 Managed full ML pipeline from data to deployment</li>
      </ul>
      `,
        techStack: [
            'Python',
            'Django',
            'PyTorch',
            'HuggingFace',
            'BLIP',
            'SQLite',
            'Google Colab',
        ],
        thumbnail: '/projects/thumbnail/visual-genie.jpg',
        longThumbnail: '/projects/long/visual-genie.jpg',
        images: ['/projects/images/visual-genie-1.png'],
    },
    {
        title: 'Real-Time Collaborative Whiteboard',
        slug: 'collaborative-whiteboard',
        liveUrl: 'https://github.com/cheenusrinivas/Collaborative-Whiteboard',
        year: 2025,
        description: `
      A multi-user whiteboard where drawing strokes sync live across all connected browsers in real time using WebSockets.<br/><br/>

      Key Features:<br/>
      <ul>
        <li>🎨 Real-time drawing sync across multiple users</li>
        <li>🏠 Create and join named rooms</li>
        <li>🖊️ Colour picker, brush size, eraser tools</li>
        <li>🗑️ Clear canvas for all users simultaneously</li>
        <li>⚡ Sub-100ms latency using Socket.IO</li>
      </ul>
      `,
        role: `
      Full-Stack Developer<br/>
      <ul>
        <li>✅ Built Canvas API drawing engine from scratch</li>
        <li>⚡ Implemented Socket.IO real-time sync</li>
        <li>🔧 Built Node.js + Express backend with room management</li>
        <li>🎨 Designed responsive UI with vanilla CSS</li>
      </ul>
      `,
        techStack: [
            'React.js',
            'Node.js',
            'Socket.IO',
            'Canvas API',
            'Express.js',
            'JavaScript',
        ],
        thumbnail: '/projects/thumbnail/whiteboard.jpg',
        longThumbnail: '/projects/long/whiteboard.jpg',
        images: ['/projects/images/whiteboard-1.png'],
    },
    {
        title: 'Voice-Enabled AI Chatbot',
        slug: 'voice-chatbot',
        liveUrl: 'https://github.com/cheenusrinivas/Voice-Chatbot-AI',
        year: 2024,
        description: `
      A voice-enabled conversational AI chatbot for government services that listens to spoken queries, understands intent using BERT, and speaks back responses.<br/><br/>

      Key Features:<br/>
      <ul>
        <li>🎤 Speech-to-Text using Google Speech Recognition</li>
        <li>🧠 BERT intent classification (HuggingFace)</li>
        <li>🔊 Text-to-Speech responses using gTTS</li>
        <li>🗄️ Firebase Firestore interaction logging</li>
        <li>📊 Query analytics dashboard</li>
      </ul>
      `,
        role: `
      Solo Developer<br/>
      <ul>
        <li>✅ Built end-to-end voice AI pipeline</li>
        <li>🧠 Integrated BERT for intent recognition</li>
        <li>🔥 Connected Firebase for real-time logging</li>
        <li>📊 Built analytics from interaction logs</li>
      </ul>
      `,
        techStack: [
            'Python',
            'BERT',
            'HuggingFace',
            'SpeechRecognition',
            'gTTS',
            'Firebase',
            'Pandas',
        ],
        thumbnail: '/projects/thumbnail/voice-chatbot.jpg',
        longThumbnail: '/projects/long/voice-chatbot.jpg',
        images: ['/projects/images/voice-chatbot-1.png'],
    },
    {
        title: 'LSTM Seq2Seq Chatbot',
        slug: 'lstm-chatbot',
        liveUrl: 'https://github.com/cheenusrinivas/ChatBot-Using-LSTM',
        year: 2024,
        description: `
      A conversational AI chatbot built using Sequence-to-Sequence LSTM neural networks, trained on the ChatterBot English dataset.<br/><br/>

      Key Features:<br/>
      <ul>
        <li>🧠 Encoder-Decoder LSTM architecture</li>
        <li>💬 Trained on ChatterBot dataset (Q&A pairs)</li>
        <li>📱 Converted to TFLite for mobile deployment</li>
        <li>⚡ Real-time response generation</li>
      </ul>
      `,
        role: `Solo Developer & Researcher`,
        techStack: [
            'Python',
            'TensorFlow',
            'Keras',
            'LSTM',
            'Seq2Seq',
            'TFLite',
            'Google Colab',
        ],
        thumbnail: '/projects/thumbnail/lstm-chatbot.jpg',
        longThumbnail: '/projects/long/lstm-chatbot.jpg',
        images: ['/projects/images/lstm-chatbot-1.png'],
    },
    {
        title: 'Lifeline Roofing & Masonry',
        slug: 'lifeline-roofing',
        liveUrl: 'https://lifelineroofingandmasonry.com',
        year: 2024,
        description: `
      A full-service business website built for a Canadian roofing and masonry company based in Toronto. Delivered end-to-end by Salt Corp Solutions.<br/><br/>

      Key Features:<br/>
      <ul>
        <li>🏗️ Hero carousel with service highlights</li>
        <li>📂 Filterable project portfolio gallery</li>
        <li>⭐ Customer testimonials section</li>
        <li>🗺️ Google Maps integration</li>
        <li>📧 Working contact form</li>
        <li>📱 Fully responsive design</li>
      </ul>
      `,
        role: `
      Full-Stack Developer (Salt Corp Solutions)<br/>
      <ul>
        <li>✅ Designed and built entire website</li>
        <li>🗺️ Integrated Google Maps API</li>
        <li>📱 Ensured mobile responsiveness</li>
        <li>🚀 Managed deployment and hosting</li>
      </ul>
      `,
        techStack: [
            'HTML5',
            'CSS3',
            'JavaScript',
            'Bootstrap',
            'Google Maps API',
        ],
        thumbnail: '/projects/thumbnail/lifeline.jpg',
        longThumbnail: '/projects/long/lifeline.jpg',
        images: ['/projects/images/lifeline-1.png'],
    },
];

export const MY_EXPERIENCE = [
    {
        title: 'Co-Founder & Web Solutions Lead',
        company: 'Salt Corp Solutions',
        duration: 'Oct 2023 - Present',
    },
    {
        title: 'Technical Advisor',
        company: 'Concentrix',
        duration: 'Apr 2024 - Jul 2024',
    },
    {
        title: 'Associate Software Engineer',
        company: 'Prodapt Solutions',
        duration: 'Feb 2023 - Mar 2024',
    },
    {
        title: 'Full-Stack Developer Intern',
        company: 'Besant Technologies',
        duration: 'May 2022 - Jan 2023',
    },
];
