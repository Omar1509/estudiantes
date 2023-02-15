function saveForm(notGetThisNames) {
    var $formNames;
    notGetThisNames = notGetThisNames || "meta";
    $formNames = $("[name]").not(notGetThisNames);
  
    $.each($formNames, function (key, value) {
      var numero = $(value).attr("name");
      // Rellenar formulario
      if (sessionStorage.getItem(name) !== null) {
          $(value).val(sessionStorage.getItem(name));
      }
    });
  
    $formNames.on("change", function (ev) {
      // Guardar datos del formulario cuando cambian
      sessionStorage.setItem($(ev.currentTarget).attr("name"), $(ev.currentTarget).val());
    });
  }
  
  saveForm();