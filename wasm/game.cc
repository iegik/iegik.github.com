#include <random>
#include <emscripten/emscripten.h>

int main() {
    return 0;
}

#ifdef __cplusplus
#define EXTERN extern "C"
#else
#define EXTERN
#endif

EXTERN EMSCRIPTEN_KEEPALIVE int generate_random_hex() {
  // Seed the random number generator (optional for better randomness)
  std::random_device rd;
  std::mt19937 gen(rd());

  // Define the range for the random number (0-FFF)
  std::uniform_int_distribution<int> dist(0, 0xFFF);

  // Generate the random 3-digit HEX number
  return dist(gen);
}
