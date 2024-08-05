#include <iostream>
#include <random>
#include <sstream>
#include <iomanip>


int main() {
  // Seed the random number generator (optional for better randomness)
  std::random_device rd;
  std::mt19937 gen(rd());

  // Define the range for the random number (0-FFF)
  std::uniform_int_distribution<int> dist(0, 0xFFF);

  // Generate the random 3-digit HEX number
  int random_hex = dist(gen);

  // Convert the integer to a HEX string with leading zeros
  std::stringstream hex_string;
  hex_string << std::hex << std::setfill('0') << std::setw(3) << random_hex;

  // Print the result
  std::cout << hex_string.str() << std::endl;

  return 0;
}