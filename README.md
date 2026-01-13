# profile-picture
React portfolio site with 3D animations
Also includes a modern **React chat widget** for your portfolio website, providing interactive **RAG (Retrieval-Augmented Generation)** AI chatbot functionality. Built with **React + Tailwind CSS + Vite**, this component demonstrates a **real-world frontend integration** of AI with a sleek user interface.  

---

## 🎨 Features

- **Floating Chat Widget**  
  A responsive, **bottom-right chat button** that expands to a full chat window.  
- **Dark Mode Friendly**  
  Elegant dark theme with smooth fade-in animations for messages and typing indicators.  
- **Typing Indicator**  
  Shows a “Bot is typing…” bubble for better UX.  
- **RAG-Ready**  
  Interacts with the backend API for **intelligent CV summarization and question answering**.  
- **Responsive & Modern UI**  
  Built entirely with **Tailwind CSS**, fully mobile-friendly.  
- **Smooth Animations**  
  Subtle message fade-ins and chat transitions for a polished feel.

---

## 🛠 Tech Stack

| Layer          | Technology |
|----------------|------------|
| Frontend       | React 18 + Vite |
| Styling        | Tailwind CSS |
| Animations     | Tailwind transitions + CSS |
| API Integration| Fetch / REST |
| Deployment     | Currently on EC2 instance |
| AI Chat        | Connects to backend RAG API |
| 3D backgound   | Using Three.js for cool 3D designs |

---

## 🚀 How It Works

1. The **chat widget** appears as a floating button on the middle-left of the website.  
2. Clicking the button opens the chat window with a **dark-mode design**.  
3. Users type a message, press enter or click **Send**, and the frontend sends a POST request to `/api/chat`.  
4. The bot responds with **RAG-powered summaries**, based on the CV packaged in the backend.  
5. Messages include smooth **fade-in animations** and a typing indicator to simulate live conversation.

---
