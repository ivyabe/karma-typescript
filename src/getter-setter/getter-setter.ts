var firstname: string, lastname: string;

function getFirstName(): string {
    return this.firstname;
};

function setFirstName(fname: string) {
    this.firstname = fname;
};

function getLastName(): string {
  return this.lastname;
};

function setLastName(lname: string) {
    this.lastname = lname;
};