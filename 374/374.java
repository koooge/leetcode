public class Solution extends GuessGame {
    public int guessNumber(int n) {
        for (int i = 0; i <= n; ++i) {
            if (guess(i) == 0) return i;
        }
        return n;
    }
}
