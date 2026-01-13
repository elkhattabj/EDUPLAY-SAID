
import { GoogleGenAI, Type } from "@google/genai";

const getAI = () => {
  return new GoogleGenAI({ apiKey: process.env.API_KEY });
};

export const getProjectAdvice = async (userInput: string) => {
  const ai = getAI();
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `L'utilisateur demande conseil pour un projet d'aménagement : "${userInput}". 
      En tant qu'expert chez EDUPLAY (spécialiste en aires de jeux, fitness plein air, mobilier urbain, revêtements techniques et matériel éducatif), 
      donne des recommandations professionnelles et ludiques. Sois concis et structuré en français.`,
      config: {
        temperature: 0.7,
        topP: 0.9,
      }
    });
    return response.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Désolé, je ne peux pas traiter votre demande pour le moment. Veuillez nous contacter directement au +212 5XX XXX XXX.";
  }
};
