public class Forecast {

    // Recursive function to compute future value
    public static double futureValue(int year, double baseValue, double growthRate) {
        if (year == 0) return baseValue;
        return futureValue(year - 1, baseValue, growthRate) * (1 + growthRate);
    }

    // Optimized version with memoization (dynamic programming)
    public static double futureValueMemo(int year, double baseValue, double growthRate, double[] memo) {
        if (year == 0) return baseValue;
        if (memo[year] != 0) return memo[year];

        memo[year] = futureValueMemo(year - 1, baseValue, growthRate, memo) * (1 + growthRate);
        return memo[year];
    }

    public static void main(String[] args) {
        double baseValue = 10000.0;     // starting amount
        double growthRate = 0.07;       // 7% annual growth
        int years = 10;

        System.out.println("📈 Recursive Forecast:");
        double value = futureValue(years, baseValue, growthRate);
        System.out.printf("Value after %d years = ₹%.2f\n", years, value);

        System.out.println("\n⚡ Optimized Forecast with Memoization:");
        double[] memo = new double[years + 1];
        double memoValue = futureValueMemo(years, baseValue, growthRate, memo);
        System.out.printf("Value after %d years = ₹%.2f\n", years, memoValue);
    }
}
