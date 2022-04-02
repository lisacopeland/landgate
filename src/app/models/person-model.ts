export class Person {

  public id: string;
  public firstName: string;
  public lastName: string;
  public age: number;
  public jobTitle: string;

  constructor(dataIn: Partial<Person>) {
    // TODO: Implement a dataIn object that gets passed in as a JavaScript Object
    Object.keys(dataIn).forEach((key) => {
      this[key] = dataIn[key];
    });

  }
}

export function mapToPerson(data: any): Person {
  return new Person(data);
}
export function mapToPeople(data: any[]): Person[] {
  if ((data !== undefined) && (data.length)) {
    const allData = data.map(mapToPerson);
    return allData;
  } else {
    return [];
  }
}