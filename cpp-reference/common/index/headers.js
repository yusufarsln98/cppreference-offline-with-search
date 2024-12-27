var headersIndex = [
  {
    name: ' <concepts>',
    path: 'cpp/header/concepts',
    description: 'Fundamental library concepts',
  },
  {
    name: ' <coroutine>',
    path: 'cpp/header/coroutine',
    description: 'Coroutine support library ',
  },
  { name: ' <any>', path: 'cpp/header/any', description: 'std::any class' },
  {
    name: ' <bitset>',
    path: 'cpp/header/bitset',
    description: 'std::bitset class template',
  },
  {
    name: ' <chrono>',
    path: 'cpp/header/chrono',
    description: 'C++ time utilities',
  },
  {
    name: ' <compare>',
    path: 'cpp/header/compare',
    description: 'Three-way comparison operator support',
  },
  {
    name: ' <csetjmp>',
    path: 'cpp/header/csetjmp',
    description:
      'Macro (and function) that saves (and jumps) to an execution context',
  },
  {
    name: ' <csignal>',
    path: 'cpp/header/csignal',
    description: 'Functions and macro constants for signal management',
  },
  {
    name: ' <cstdarg>',
    path: 'cpp/header/cstdarg',
    description: 'Handling of variable length argument lists',
  },
  {
    name: ' <cstddef>',
    path: 'cpp/header/cstddef',
    description: 'Standard macros and typedefs',
  },
  {
    name: ' <cstdlib>',
    path: 'cpp/header/cstdlib',
    description:
      'General purpose utilities:  program control,  dynamic memory allocation,  random numbers,  sort and search ',
  },
  {
    name: ' <ctime>',
    path: 'cpp/header/ctime',
    description: 'C-style time/date utilities',
  },
  {
    name: ' <expected>',
    path: 'cpp/header/expected',
    description: 'std::expected class template',
  },
  {
    name: ' <functional>',
    path: 'cpp/header/functional',
    description:
      'Function objects, Function invocations, Bind operations and Reference wrappers',
  },
  {
    name: ' <initializer_list>',
    path: 'cpp/header/initializer list',
    description: 'std::initializer_list class template',
  },
  {
    name: ' <optional>',
    path: 'cpp/header/optional',
    description: 'std::optional class template',
  },
  {
    name: ' <source_location>',
    path: 'cpp/header/source location',
    description: 'Supplies means to obtain source code location',
  },
  {
    name: ' <tuple>',
    path: 'cpp/header/tuple',
    description: 'std::tuple class template',
  },
  {
    name: ' <type_traits>',
    path: 'cpp/header/type traits',
    description: 'Compile-time type information',
  },
  {
    name: ' <typeindex>',
    path: 'cpp/header/typeindex',
    description: 'std::type_index ',
  },
  {
    name: ' <typeinfo>',
    path: 'cpp/header/typeinfo',
    description: 'Runtime type information utilities',
  },
  {
    name: ' <utility>',
    path: 'cpp/header/utility',
    description: 'Various  utility components',
  },
  {
    name: ' <variant>',
    path: 'cpp/header/variant',
    description: 'std::variant class template',
  },
  {
    name: ' <version>',
    path: 'cpp/header/version',
    description: 'Supplies implementation-dependent library information',
  },
  {
    name: ' <memory>',
    path: 'cpp/header/memory',
    description: 'High-level memory management utilities',
  },
  {
    name: ' <memory_resource>',
    path: 'cpp/header/memory resource',
    description: 'Polymorphic allocators and memory resources',
  },
  {
    name: ' <new>',
    path: 'cpp/header/new',
    description: 'Low-level memory management utilities',
  },
  {
    name: ' <scoped_allocator>',
    path: 'cpp/header/scoped allocator',
    description: 'Nested allocator class',
  },
  {
    name: ' <cfloat>',
    path: 'cpp/header/cfloat',
    description: 'Limits of floating-point types',
  },
  {
    name: ' <cinttypes>',
    path: 'cpp/header/cinttypes',
    description:
      'Formatting macros, intmax_t and uintmax_t math and conversions',
  },
  {
    name: ' <climits>',
    path: 'cpp/header/climits',
    description: 'Limits of integral types',
  },
  {
    name: ' <cstdint>',
    path: 'cpp/header/cstdint',
    description: 'Fixed-width integer types and  limits of other types',
  },
  {
    name: ' <limits>',
    path: 'cpp/header/limits',
    description: 'Uniform way to query properties of arithmetic types',
  },
  {
    name: ' <stdfloat>',
    path: 'cpp/header/stdfloat',
    description: 'Optional extended floating-point types ',
  },
  {
    name: ' <cassert>',
    path: 'cpp/header/cassert',
    description:
      'Conditionally compiled macro that compares its argument to zero',
  },
  {
    name: ' <cerrno>',
    path: 'cpp/header/cerrno',
    description: 'Macro containing the last error number',
  },
  {
    name: ' <exception>',
    path: 'cpp/header/exception',
    description: 'Exception handling utilities',
  },
  {
    name: ' <stacktrace>',
    path: 'cpp/header/stacktrace',
    description: 'Stacktrace library',
  },
  {
    name: ' <stdexcept>',
    path: 'cpp/header/stdexcept',
    description: 'Standard exception objects',
  },
  {
    name: ' <system_error>',
    path: 'cpp/header/system error',
    description: 'Defines std::error_code, a platform-dependent error code',
  },
  {
    name: ' <cctype>',
    path: 'cpp/header/cctype',
    description: 'Functions to determine the category of narrow characters',
  },
  {
    name: ' <charconv>',
    path: 'cpp/header/charconv',
    description: 'std::to_chars and std::from_chars ',
  },
  {
    name: ' <cstring>',
    path: 'cpp/header/cstring',
    description: 'Various  narrow character string handling functions',
  },
  {
    name: ' <cuchar>',
    path: 'cpp/header/cuchar',
    description: 'C-style  Unicode character conversion functions',
  },
  {
    name: ' <cwchar>',
    path: 'cpp/header/cwchar',
    description: 'Various wide and multibyte string handling functions',
  },
  {
    name: ' <cwctype>',
    path: 'cpp/header/cwctype',
    description: 'Functions to determine the category of wide characters',
  },
  {
    name: ' <format>',
    path: 'cpp/header/format',
    description: 'Formatting library including std::format ',
  },
  {
    name: ' <string>',
    path: 'cpp/header/string',
    description: 'std::basic_string class template',
  },
  {
    name: ' <string_view>',
    path: 'cpp/header/string view',
    description: 'std::basic_string_view class template',
  },
  {
    name: ' <array>',
    path: 'cpp/header/array',
    description: 'std::array container',
  },
  {
    name: ' <deque>',
    path: 'cpp/header/deque',
    description: 'std::deque container',
  },
  {
    name: ' <flat_map>',
    path: 'cpp/header/flat map',
    description: 'std::flat_map and std::flat_multimap container adaptors ',
  },
  {
    name: ' <flat_set>',
    path: 'cpp/header/flat set',
    description: 'std::flat_set and std::flat_multiset container adaptors ',
  },
  {
    name: ' <forward_list>',
    path: 'cpp/header/forward list',
    description: 'std::forward_list container',
  },
  {
    name: ' <list>',
    path: 'cpp/header/list',
    description: 'std::list container',
  },
  {
    name: ' <map>',
    path: 'cpp/header/map',
    description: 'std::map and std::multimap associative containers',
  },
  {
    name: ' <mdspan>',
    path: 'cpp/header/mdspan',
    description: 'std::mdspan view ',
  },
  {
    name: ' <queue>',
    path: 'cpp/header/queue',
    description: 'std::queue and std::priority_queue container adaptors',
  },
  {
    name: ' <set>',
    path: 'cpp/header/set',
    description: 'std::set and std::multiset associative containers',
  },
  { name: ' <span>', path: 'cpp/header/span', description: 'std::span view' },
  {
    name: ' <stack>',
    path: 'cpp/header/stack',
    description: 'std::stack container adaptor ',
  },
  {
    name: ' <unordered_map>',
    path: 'cpp/header/unordered map',
    description:
      'std::unordered_map and std::unordered_multimap unordered associative containers',
  },
  {
    name: ' <unordered_set>',
    path: 'cpp/header/unordered set',
    description:
      'std::unordered_set and std::unordered_multiset unordered associative containers',
  },
  {
    name: ' <vector>',
    path: 'cpp/header/vector',
    description: 'std::vector container',
  },
  {
    name: ' <iterator>',
    path: 'cpp/header/iterator',
    description: 'Range iterators',
  },
  {
    name: ' <generator>',
    path: 'cpp/header/generator',
    description: 'std::generator class template ',
  },
  {
    name: ' <ranges>',
    path: 'cpp/header/ranges',
    description:
      'Range access, primitives, requirements, utilities and adaptors',
  },
  {
    name: ' <algorithm>',
    path: 'cpp/header/algorithm',
    description: 'Algorithms that operate on ranges',
  },
  {
    name: ' <execution>',
    path: 'cpp/header/execution',
    description:
      'Predefined execution policies for parallel versions of the algorithms',
  },
  {
    name: ' <bit>',
    path: 'cpp/header/bit',
    description: 'Bit manipulation functions',
  },
  {
    name: ' <cfenv>',
    path: 'cpp/header/cfenv',
    description: 'Floating-point environment access functions',
  },
  {
    name: ' <cmath>',
    path: 'cpp/header/cmath',
    description: 'Common mathematics functions',
  },
  {
    name: ' <complex>',
    path: 'cpp/header/complex',
    description: 'Complex number type',
  },
  {
    name: ' <numbers>',
    path: 'cpp/header/numbers',
    description: 'Math constants',
  },
  {
    name: ' <numeric>',
    path: 'cpp/header/numeric',
    description: 'Numeric operations on values in ranges',
  },
  {
    name: ' <random>',
    path: 'cpp/header/random',
    description: 'Random number generators and distributions',
  },
  {
    name: ' <ratio>',
    path: 'cpp/header/ratio',
    description: 'Compile-time rational arithmetic',
  },
  {
    name: ' <valarray>',
    path: 'cpp/header/valarray',
    description: 'Class for representing and manipulating arrays of values',
  },
  {
    name: ' <clocale>',
    path: 'cpp/header/clocale',
    description: 'C localization utilities',
  },
  {
    name: ' <codecvt>',
    path: 'cpp/header/codecvt',
    description: 'Unicode conversion facilities',
  },
  {
    name: ' <locale>',
    path: 'cpp/header/locale',
    description: 'Localization utilities',
  },
  {
    name: ' <cstdio>',
    path: 'cpp/header/cstdio',
    description: 'C-style input-output functions',
  },
  {
    name: ' <fstream>',
    path: 'cpp/header/fstream',
    description:
      'std::basic_fstream, std::basic_ifstream, std::basic_ofstream class templates and several typedefs',
  },
  {
    name: ' <iomanip>',
    path: 'cpp/header/iomanip',
    description: 'Helper functions to control the format of input and output',
  },
  {
    name: ' <ios>',
    path: 'cpp/header/ios',
    description:
      'std::ios_base class, std::basic_ios class template and several typedefs',
  },
  {
    name: ' <iosfwd>',
    path: 'cpp/header/iosfwd',
    description:
      'Forward declarations of all classes in the input/output library',
  },
  {
    name: ' <iostream>',
    path: 'cpp/header/iostream',
    description: 'Several standard stream objects',
  },
  {
    name: ' <istream>',
    path: 'cpp/header/istream',
    description: 'std::basic_istream class template and several typedefs',
  },
  {
    name: ' <ostream>',
    path: 'cpp/header/ostream',
    description:
      'std::basic_ostream, std::basic_iostream class templates and several typedefs',
  },
  {
    name: ' <print>',
    path: 'cpp/header/print',
    description: 'Formatted output library including std::print ',
  },
  {
    name: ' <spanstream>',
    path: 'cpp/header/spanstream',
    description:
      'std::basic_spanstream, std::basic_ispanstream, std::basic_ospanstream class templates and typedefs',
  },
  {
    name: ' <sstream>',
    path: 'cpp/header/sstream',
    description:
      'std::basic_stringstream, std::basic_istringstream, std::basic_ostringstream class templates and several typedefs',
  },
  {
    name: ' <streambuf>',
    path: 'cpp/header/streambuf',
    description: 'std::basic_streambuf class template',
  },
  {
    name: ' <strstream>',
    path: 'cpp/header/strstream',
    description: 'std::strstream, std::istrstream, std::ostrstream ',
  },
  {
    name: ' <syncstream>',
    path: 'cpp/header/syncstream',
    description: 'std::basic_osyncstream, std::basic_syncbuf, and typedefs',
  },
  {
    name: ' <filesystem>',
    path: 'cpp/header/filesystem',
    description: 'std::path class and  supporting functions ',
  },
  {
    name: ' <regex>',
    path: 'cpp/header/regex',
    description:
      'Classes, algorithms and iterators to support regular expression processing',
  },
  {
    name: ' <atomic>',
    path: 'cpp/header/atomic',
    description: 'Atomic operations library',
  },
  { name: ' <barrier>', path: 'cpp/header/barrier', description: 'Barriers ' },
  {
    name: ' <condition_variable>',
    path: 'cpp/header/condition variable',
    description: 'Thread waiting conditions',
  },
  {
    name: ' <future>',
    path: 'cpp/header/future',
    description: 'Primitives for asynchronous computations',
  },
  { name: ' <latch>', path: 'cpp/header/latch', description: 'Latches' },
  {
    name: ' <mutex>',
    path: 'cpp/header/mutex',
    description: 'Mutual exclusion primitives',
  },
  {
    name: ' <semaphore>',
    path: 'cpp/header/semaphore',
    description: 'Semaphores',
  },
  {
    name: ' <shared_mutex>',
    path: 'cpp/header/shared mutex',
    description: 'Shared mutual exclusion primitives',
  },
  {
    name: ' <stop_token>',
    path: 'cpp/header/stop token',
    description: 'Stop tokens for std::jthread ',
  },
  {
    name: ' <thread>',
    path: 'cpp/header/thread',
    description: 'std::thread class and  supporting functions',
  },
  {
    name: ' <assert.h>',
    path: 'cpp/header/cassert',
    description: 'Behaves same as <cassert> ',
  },
  {
    name: ' <ctype.h>',
    path: 'cpp/header/cctype',
    description:
      'Behaves as if each name from <cctype> is placed in global namespace',
  },
  {
    name: ' <errno.h>',
    path: 'cpp/header/cerrno',
    description: 'Behaves same as <cerrno> ',
  },
  {
    name: ' <fenv.h>',
    path: 'cpp/header/cfenv',
    description:
      'Behaves as if each name from <cfenv> is placed in global namespace',
  },
  {
    name: ' <float.h>',
    path: 'cpp/header/cfloat',
    description: 'Behaves same as <cfloat> ',
  },
  {
    name: ' <inttypes.h>',
    path: 'cpp/header/cinttypes',
    description:
      'Behaves as if each name from <cinttypes> is placed in global namespace',
  },
  {
    name: ' <limits.h>',
    path: 'cpp/header/climits',
    description: 'Behaves same as <climits> ',
  },
  {
    name: ' <locale.h>',
    path: 'cpp/header/clocale',
    description:
      'Behaves as if each name from <clocale> is placed in global namespace',
  },
  {
    name: ' <math.h>',
    path: 'cpp/header/cmath',
    description:
      'Behaves as if each name from <cmath> is placed in global namespace,except for names of mathematical special functions',
  },
  {
    name: ' <setjmp.h>',
    path: 'cpp/header/csetjmp',
    description:
      'Behaves as if each name from <csetjmp> is placed in global namespace',
  },
  {
    name: ' <signal.h>',
    path: 'cpp/header/csignal',
    description:
      'Behaves as if each name from <csignal> is placed in global namespace',
  },
  {
    name: ' <stdarg.h>',
    path: 'cpp/header/cstdarg',
    description:
      'Behaves as if each name from <cstdarg> is placed in global namespace ',
  },
  {
    name: ' <stddef.h>',
    path: 'cpp/header/cstddef',
    description:
      'Behaves as if each name from <cstddef> is placed in global namespace,except for names of std::byte and related functions',
  },
  {
    name: ' <stdint.h>',
    path: 'cpp/header/cstdint',
    description:
      'Behaves as if each name from <cstdint> is placed in global namespace',
  },
  {
    name: ' <stdio.h>',
    path: 'cpp/header/cstdio',
    description:
      'Behaves as if each name from <cstdio> is placed in global namespace',
  },
  {
    name: ' <stdlib.h>',
    path: 'cpp/header/cstdlib',
    description:
      'Behaves as if each name from <cstdlib> is placed in global namespace',
  },
  {
    name: ' <string.h>',
    path: 'cpp/header/cstring',
    description:
      'Behaves as if each name from <cstring> is placed in global namespace',
  },
  {
    name: ' <time.h>',
    path: 'cpp/header/ctime',
    description:
      'Behaves as if each name from <ctime> is placed in global namespace',
  },
  {
    name: ' <uchar.h>',
    path: 'cpp/header/cuchar',
    description:
      'Behaves as if each name from <cuchar> is placed in global namespace',
  },
  {
    name: ' <wchar.h>',
    path: 'cpp/header/cwchar',
    description:
      'Behaves as if each name from <cwchar> is placed in global namespace',
  },
  {
    name: ' <wctype.h>',
    path: 'cpp/header/cwctype',
    description:
      'Behaves as if each name from <cwctype> is placed in global namespace',
  },
  {
    name: ' <stdatomic.h>',
    path: 'cpp/header/stdatomic.h',
    description:
      'Defines _Atomic and provides corresponding components in the C standard library',
  },
  {
    name: ' <ccomplex>',
    path: 'cpp/header/ccomplex',
    description: 'Simply includes the header <complex> ',
  },
  {
    name: ' <complex.h>',
    path: 'cpp/header/ccomplex',
    description: 'Simply includes the header <complex> ',
  },
  {
    name: ' <ctgmath>',
    path: 'cpp/header/ctgmath',
    description:
      'Simply includes the headers <complex> and <cmath>: the overloads equivalent to the contents of the C header tgmath.h are already provided by those headers',
  },
  {
    name: ' <tgmath.h>',
    path: 'cpp/header/ctgmath',
    description: 'Simply includes the headers <complex> and <cmath>  ',
  },
  {
    name: ' <ciso646>',
    path: 'cpp/header/ciso646',
    description:
      'Empty header. The macros that appear in iso646.h in C are keywords in C++',
  },
  {
    name: ' <cstdalign>',
    path: 'cpp/header/cstdalign',
    description: 'Defines one compatibility macro constant',
  },
  {
    name: ' <cstdbool>',
    path: 'cpp/header/cstdbool',
    description: 'Defines one compatibility macro constant',
  },
  {
    name: ' <iso646.h>',
    path: 'cpp/header/ciso646',
    description: 'Has no effect',
  },
  {
    name: ' <stdalign.h>',
    path: 'cpp/header/cstdalign',
    description: 'Defines one compatibility macro constant',
  },
  {
    name: ' <stdbool.h>',
    path: 'cpp/header/cstdbool',
    description: 'Defines one compatibility macro constant ',
  },
];
