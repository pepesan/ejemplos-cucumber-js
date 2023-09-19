Feature: Carga inicial
  Debería poder cargar las cajas iniciales, lo botones y lo valores iniciales
  Scenario:
    Given abro el pactometro
    Then compruebo los ceros
    And existe el boton de reset
    And existe la caja de Partidos
    And existen los botones de los partidos
