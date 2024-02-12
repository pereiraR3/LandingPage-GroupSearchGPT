function filterSelection(category) {
    var cards = document.querySelectorAll('#clickable-card');
  
    cards.forEach(function(card) {
      if (category === 'all' || card.dataset.category === category) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  }
  
  function openModal(cardId) {
    // Aqui você pode adicionar as informações específicas do cartão ao modal
    var modalContent = document.getElementById('modalContent');
    
    // Exemplo: Apenas exibindo o ID do cartão no modal
    modalContent.innerHTML = 'Informações adicionais para o cartão com ID: ' + cardId;

    // Exibindo o modal
    $('#infoModal').modal('show');
  }