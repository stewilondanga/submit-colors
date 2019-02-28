var navigate = (function() {
  $('.dd').toggle();
  $('.dd_btn').click(function() {
    var dataName = $(this).attr('data-name');
    $('.dd').hide();
    $('.' + dataName).toggle();
  });
})();

/*(function(){
  const themeform = document.getElementById("themeform");
  themeform.onSubmit = (e) => {
    e.preventDefault();
    const headerTextColor = document.getElementById('header-text-color').value;
    const stdTextColor = document.getElementById('standard-text-color').value;
    const primaryColor = document.getElementById('primary-color').value;
    const backgroundColor = document.getElementById('background-color').value;

    document.documentElement.style.setProperty('--header-text-color', headerTextColor);
    document.documentElement.style.setProperty('--standard-text-color', stdTextColor);
    document.documentElement.style.setProperty('--primary-color', primaryColor);
    document.documentElement.style.setProperty('--background-color', backgroundColor);
  };
})();
