Feature: Navegacion
  Scenario: Navega
    Given abro el navegador
    When relleno el formulario
    And pulso en buscar
    Then compruebo el texto
