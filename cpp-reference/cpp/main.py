import os
import sys


def search_and_replace_text(directory, search_text, replace_text=None):
    total_count = 0
    for root, _, files in os.walk(directory):
        for file in files:
            file_path = os.path.join(root, file)
            try:
                with open(file_path, "r", encoding="utf-8") as f:
                    content = f.readlines()

                occurrences = []
                updated_content = []
                for line_num, line in enumerate(content, start=1):
                    line_occurrences = line.lower().count(search_text.lower())
                    if line_occurrences > 0:
                        occurrences.append((line_num, line.strip()))
                        total_count += line_occurrences
                    if replace_text:
                        updated_content.append(line.replace(search_text, replace_text))
                    else:
                        updated_content.append(line)

                # Comment the if block below to run the script faster without printing the occurrences
                if occurrences:
                    print(f"Occurrences in {file_path}:")
                    for line_num, line in occurrences:
                        print(f"  Line {line_num}: {line}")

                if replace_text and occurrences:
                    with open(file_path, "w", encoding="utf-8") as f:
                        f.writelines(updated_content)

            except (UnicodeDecodeError, PermissionError) as e:
                print(f"Could not process file {file_path}: {e}")

    print(f"\nTotal occurrences of '{search_text}': {total_count}")


if __name__ == "__main__":
    if len(sys.argv) < 2:
        print("Usage: python main.py <search_text> [replace_text]")
        sys.exit(1)

    search_text = sys.argv[1]
    replace_text = sys.argv[2] if len(sys.argv) > 2 else None

    search_and_replace_text(os.getcwd(), search_text, replace_text)