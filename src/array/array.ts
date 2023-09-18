interface HashTable<T> {
  [key: number]: T;
}

export class CustomArray<T> {
  public length: number;
  private data: HashTable<T>;

  constructor() {
    this.length = 0;
    this.data = {} as HashTable<T>;
  }

  push(item: T): number {
    this.data[this.length] = item;
    this.length++;
    return this.length;
  }

  pop(): T | undefined {
    if (this.length === 0) return undefined;

    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastItem;
  }

  get(index: number): T | undefined {
    return this.data[index];
  }

  insert(index: number, item: T): HashTable<T> | undefined {
    // Ensure index is within valid range
    if (index < 0 || index > this.length) {
      return undefined;
    }

    // Shift items starting from the end
    for (let i = this.length; i > index; i--) {
      this.data[i] = this.data[i - 1];
    }

    // Insert the new item
    this.data[index] = item;
    this.length++;
    return this.data;
  }

  toArray(): T[] {
    return Array.from({ length: this.length }, (_, i) => this.get(i) as T);
  }

  // You can add more methods as needed, e.g., 'delete', 'indexOf', etc.
}
