let nhap = prompt('Nhap chuoi bat ky : ');
message = (nhap==='Employee')?'Hello':(nhap==='Director')?'Greetings':(nhap==="")?'No Login':'';
alert(message);
