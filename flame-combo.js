
	var pozz =Orion.FindType('0x0F0D', '-1', 'self', true);
			var pozza = pozz[0];
        Orion.Wait(150);
        
		Orion.Cast("Flame Strike");
		
        Orion.UseObject(pozza);
 
        while(!Orion.WaitJournal('2', Orion.Now(), Orion.Now() +3300, 'sys|my')){
          Orion.Wait(10);
       }
        Orion.UseObject(pozza);
          Orion.TargetObject( lasttarget);
          
        Orion.WaitForTarget();
          Orion.TargetObject( lasttarget);

