/** Renders table based on a list of objects */

interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
  }
  
  const studentA: Student = {
    firstName: 'Goku',
    lastName: 'Son',
    age: 23,
    location: 'Earth',
  }
  
  const studentB: Student = {
    firstName: 'Monkey',
    lastName: 'dLuffy',
    age: 15,
    location: 'Unknoe',
  }
  
  const studentList = [studentA, studentB];
  
  const table = document.createElement('table');
  const tbody = document.createElement('tbody');
  
  studentList.forEach((obj) => {
    const row = document.createElement('tr');
    const cellName = document.createElement('td');
    const cellLocation = document.createElement('td');
    cellName.textContent = obj.firstName;
    cellLocation.textContent = obj.location;
    row.appendChild(cellName);
    row.appendChild(cellLocation);
    tbody.appendChild(row);
  });
  table.appendChild(tbody);
  document.body.appendChild(table);
  