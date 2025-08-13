# AIChef 🍳

AIChef is an intelligent recipe generator that creates delicious recipes based on ingredients you have at home. Powered by AI, it helps you discover new culinary possibilities with whatever you have in your kitchen.

## 🌐 Live Demo

**[Try AIChef Live](https://keshf-aichef.netlify.app/)** - Experience the app in action!

## ✨ Features

- **Smart Recipe Generation**: Enter your available ingredients and get personalized recipe suggestions
- **AI-Powered**: Uses advanced AI technology to create recipes tailored to your ingredients
- **Beautiful UI**: Modern, responsive design with smooth animations and loading states
- **Real-time Feedback**: Live loading indicators while your recipe is being generated
- **Ingredient Management**: Easy-to-use interface for adding and managing ingredients

## 🚀 Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/aichef.git
cd aichef
```

2. Install dependencies:

```bash
npm install
```

3. Set up your AI API credentials:

   - Create a `.env` file in the root directory
   - Add your AI service API key (see Configuration section)

4. Start the development server:

```bash
npm run dev
```

5. Open your browser and navigate to the local server. Example: `http://localhost:5173`.

## ⚙️ Configuration

AIChef uses AI services to generate recipes. You'll need to set up API credentials:

1. Create a `.env` file in the project root
2. Add your API key:

```env
VITE_AI_API_KEY=your_api_key_here
```

**⚠️ Important Security Note**: Never commit your API keys to version control. The `.env` file should be added to your `.gitignore` file.

## 🎯 How to Use

1. **Add Ingredients**: Type ingredients you have available and click "Add ingredients"
2. **Generate Recipe**: Once you have at least 4 ingredients, click "Get a recipe"
3. **Enjoy**: Watch as AI Chef creates a personalized recipe for you!

## 🛠️ Built With

- **React 19** - Frontend framework
- **Vite** - Build tool and development server
- **React Markdown** - For rendering recipe content
- **Modern CSS** - Custom styling with animations and gradients

## 📝 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## � Contact

- GitHub: [@tayyab-dev-official](https://github.com/tayyab-dev-official)
- LinkedIn: [Mohammad Tayyab](https://www.linkedin.com/in/mohammad-tayyab-91ba5236b/)
- Email: tayyab.professional.official@gmail.com

## �🙏 Acknowledgments

- Thanks to the AI community for making intelligent recipe generation possible
- Inspired by the joy of cooking and discovering new recipes
