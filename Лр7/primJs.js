let style = `
  background-color: #ffd6ec;
  color: #b0006d;
  font-size: 26pt;
  font-family: 'Segoe UI', sans-serif;
  padding: 15px;
  border-radius: 15px;
  box-shadow: 0 0 15px #f5b2d4;
`;
let name='Мережа магазинів "ВСЕ ДЛЯ ДОМУ"';
let today=new Date();
let date=today.getDate()+"."+(today.getMonth()+1)+"."+today.getFullYear();
document.write('<p align="center" style="' + style + '">'+name+'</p>');
document.write('<p align="center" style="color:#d147a3; font-size:16pt;">Сьогодні '+date+'</p>');
