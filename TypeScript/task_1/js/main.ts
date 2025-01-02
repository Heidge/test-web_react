interface Teacher {
    firstName: string;
    lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
	location : string;
	[key: string]: any;
}

// for testing review

const teacher: Teacher = {
	firstName: 'John',
	fullTimeEmployee: false,
	lastName: 'Doe',
	location: 'London',
	employeeId: 98,
  };
  
  console.log(teacher);
