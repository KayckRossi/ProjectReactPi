import React from 'react';
import './App.css';
import Products from './components/Products';

const products = [
  { "id": 1, "title": "Vestido Floral", "description": "Vestido com estampa floral, ideal para eventos casuais.", "imageUrl": "https://via.placeholder.com/150?text=Vestido+Floral" },
  { "id": 2, "title": "Camisa Social", "description": "Camisa social masculina em algodão, perfeita para ocasiões formais.", "imageUrl": "https://via.placeholder.com/150?text=Camisa+Social" },
  { "id": 3, "title": "Saia Jeans", "description": "Saia jeans com cintura alta, estilo clássico e moderno.", "imageUrl": "https://via.placeholder.com/150?text=Saia+Jeans" },
  { "id": 4, "title": "Blusa de Seda", "description": "Blusa feminina de seda, confortável e elegante.", "imageUrl": "https://via.placeholder.com/150?text=Blusa+de+Seda" },
  { "id": 5, "title": "Tênis Casual", "description": "Tênis casual para uso diário, disponível em várias cores.", "imageUrl": "https://via.placeholder.com/150?text=T%C3%AAnis+Casual" },
  { "id": 6, "title": "Calça de Alfaiataria", "description": "Calça masculina de alfaiataria, ideal para o ambiente corporativo.", "imageUrl": "https://via.placeholder.com/150?text=Cal%C3%A7a+de+Alfaiataria" },
  { "id": 7, "title": "Jaqueta de Couro", "description": "Jaqueta de couro masculina, um clássico para o inverno.", "imageUrl": "https://via.placeholder.com/150?text=Jaqueta+de+Couro" },
  { "id": 8, "title": "Blazer Feminino", "description": "Blazer feminino elegante para ocasiões especiais.", "imageUrl": "https://via.placeholder.com/150?text=Blazer+Feminino" },
  { "id": 9, "title": "Shorts de Praia", "description": "Shorts de praia com estampa tropical, ideal para o verão.", "imageUrl": "https://via.placeholder.com/150?text=Shorts+de+Praia" },
  { "id": 10, "title": "Camisa Polo", "description": "Camisa polo masculina, disponível em várias cores.", "imageUrl": "https://via.placeholder.com/150?text=Camisa+Polo" },
  { "id": 11, "title": "Macacão Jeans", "description": "Macacão jeans feminino, estilo despojado e confortável.", "imageUrl": "https://via.placeholder.com/150?text=Macac%C3%A3o+Jeans" },
  { "id": 12, "title": "Suéter Tricotado", "description": "Suéter tricotado para os dias frios, disponível em várias cores.", "imageUrl": "https://via.placeholder.com/150?text=Su%C3%A9ter+Tricotado" },
  { "id": 13, "title": "Tênis de Corrida", "description": "Tênis de corrida com amortecimento e suporte.", "imageUrl": "https://via.placeholder.com/150?text=T%C3%AAnis+de+Corrida" },
  { "id": 14, "title": "Camisa de Linho", "description": "Camisa de linho masculina, leve e arejada.", "imageUrl": "https://via.placeholder.com/150?text=Camisa+de+Linho" },
  { "id": 15, "title": "Vestido Midi", "description": "Vestido midi feminino, elegante para eventos formais.", "imageUrl": "https://via.placeholder.com/150?text=Vestido+Midi" },
  { "id": 16, "title": "Calça Jogging", "description": "Calça jogging masculina para conforto e estilo casual.", "imageUrl": "https://via.placeholder.com/150?text=Cal%C3%A7a+Jogging" },
  { "id": 17, "title": "Top de Crochê", "description": "Top de crochê feminino, estilo boho chic.", "imageUrl": "https://via.placeholder.com/150?text=Top+de+Croch%C3%AA" },
  { "id": 18, "title": "Camisa Xadrez", "description": "Camisa xadrez masculina, estilo casual e moderno.", "imageUrl": "https://via.placeholder.com/150?text=Camisa+Xadrez" },
  { "id": 19, "title": "Blusa com Manga Bufante", "description": "Blusa feminina com manga bufante, tendência atual.", "imageUrl": "https://via.placeholder.com/150?text=Blusa+com+Manga+Bufante" },
  { "id": 20, "title": "Casaco de Lã", "description": "Casaco de lã masculino, essencial para o inverno.", "imageUrl": "https://via.placeholder.com/150?text=Casaco+de+L%C3%A3" }
]; 

function App() {
  return (
    <div className="App">
      <Products products={products} />
    </div>
  );
}

export default App;
