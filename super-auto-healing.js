
  while (!Player.Dead())
  {
    if (Player.Poisoned())
    {
        if (Orion.FindType('0x0F07', '-1', 'self', true).lenght > 0) {
            Orion.UseType('0x0F07', '0xFFFF');
            Orion.Wait(500);
        } else {
            Orion.Cast('Cure', 'Self');
            Orion.Wait(500);
        }
    }
    if (Player.Hits() < Player.MaxHits()){

      if (Orion.FindType('0x0F0C', '-1', 'self', true).lenght > 0) {
              Orion.UseType('0x0F07', '0x0F0C');
              Orion.Wait(500);
      }
      else if (Player.Hits() < 100 && Player.Hits() > 60) 
      {
           Orion.Cast('Heal', 'Self');
           Orion.Wait(500);
      }
      else if (Player.Hits() < 60) 
      {
           Orion.Cast('Greater Heal', 'Self');
           Orion.Wait(500);
      }
    }
  }
