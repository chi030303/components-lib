document.querySelectorAll('.clearable-input').forEach(function (el) {
    var input = el.querySelector('input');
    var clearBtn = el.querySelector('.clear-btn');
    
    clearBtn.addEventListener('click', function() {
      input.value = '';
    });
});
  