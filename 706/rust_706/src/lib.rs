struct MyHashMap {
    values: [i32; 1_000_001],
}

/**
 * `&self` means the method takes an immutable reference.
 * If you need a mutable reference, change it to `&mut self` instead.
 */
impl MyHashMap {
    fn new() -> Self {
        Self {
            values: [-1; 1_000_001],
        }
    }

    fn put(&mut self, key: i32, value: i32) {
        self.values[key as usize] = value;
    }

    fn get(&self, key: i32) -> i32 {
        self.values[key as usize]
    }

    fn remove(&mut self, key: i32) {
        self.values[key as usize] = -1;
    }
}

/**
 * Your obj object will be instantiated and called as such:
 * let obj = obj::new();
 * obj.put(key, value);
 * let ret_2: i32 = obj.get(key);
 * obj.remove(key);
 */

#[cfg(test)]
mod tests {
    use crate::MyHashMap;

    #[test]
    fn it_works() {
        let mut obj = MyHashMap::new();
        obj.put(1, 1); // The map is now [[1,1]]
        obj.put(2, 2); // The map is now [[1,1], [2,2]]
        obj.get(1); // return 1, The map is now [[1,1], [2,2]]
        obj.get(3); // return -1 (i.e., not found), The map is now [[1,1], [2,2]]
        obj.put(2, 1); // The map is now [[1,1], [2,1]] (i.e., update the existing value)
        obj.get(2); // return 1, The map is now [[1,1], [2,1]]
        obj.remove(2); // remove the mapping for 2, The map is now [[1,1]]
        obj.get(2); // return -1 (i.e., not found), The map is now [[1,1]]
    }
}
