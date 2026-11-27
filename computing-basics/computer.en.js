// English for 0.5 Parts of a computer. Korean (the page) → English. Rules: DESIGN.md "두 언어".
window.lessonText = {
  '누른 A가 화면에 표시된다': 'Pressing A shows A on the screen',
  '키보드에서 A를 누르면 번호 65가 같은 CPU를 거쳐 화면의 글자 A로 표시됩니다.':
    'Pressing A sends the number 65 through the CPU and displays the letter A on the screen.',
  '키보드에서 2와 3을 보내면 CPU가 RAM에 씁니다. 같은 CPU가 점선 방향으로 2와 3을 읽고 더해 화면에 5를 표시합니다.':
    'The CPU writes the typed 2 and 3 to RAM. The same CPU reads them back along the dashed line, adds them, and displays 5.',
  '이 예에서는 키보드에서 받은 2와 3을 CPU가 메모리(RAM)에 적어 둡니다. 입력할 때 쓴 CPU가 같은 두 값을 다시 읽어 더한 뒤, 결과 5를 화면에 보냅니다. RAM에 적어 둔 값은 전원이 꺼지면 사라집니다.':
    'In this example the CPU writes the typed 2 and 3 into RAM. It reads those same numbers back, adds them, then sends the result 5 to the screen. Values in RAM disappear when the power goes off.',
  '보이는 5를 파일에 복사한다': 'Save a copy of the displayed 5',
  '저장을 실행하면 RAM의 결과 5가 저장장치의 result.txt에 복사됩니다. RAM과 화면에도 5가 남습니다.':
    'Saving copies the result 5 from RAM into result.txt in storage. RAM and the screen still show 5.',
  '저장 버튼': 'Save', '메모리 (RAM)': 'Memory (RAM)', '5 복사': 'Copy 5',
  '전원을 끄면 파일만 5를 간직한다': 'The file keeps 5 after power off',
  '전원이 꺼진 뒤 RAM의 5는 사라지고 화면이 꺼집니다. 저장장치의 result.txt에는 같은 5가 남습니다.':
    'After power off, RAM loses its 5 and the screen goes blank. The same 5 stays in result.txt in storage.',
  '5 → 비어 있음': '5 → Empty', '파일 그대로': 'File unchanged', '꺼짐': 'Off',
  '다시 켜서 파일의 5를 읽는다': 'Power on and read the file’s 5',
  '다시 켜고 result.txt를 열면 저장장치의 5가 빈 RAM으로 들어옵니다. 같은 CPU가 RAM에서 5를 읽어 화면에 표시합니다. 저장 파일은 그대로입니다.':
    'Turn the computer back on and open result.txt. Storage loads its 5 into empty RAM. The same CPU reads the 5 from RAM and displays it. The file stays the same.',
  '비어 있음 → 5': 'Empty → 5', '전원 켬': 'Power on', '읽은 값 5': 'Reads 5',
  "① 입력": "① Input",
  "② 쓰기": "② Write",
  "③ 읽기": "③ Read",
  "④ 표시": "④ Display",
  "CPU는 메모리에 쓰고 읽은 뒤 계산한다": "The CPU writes, reads, then calculates",
  "키보드": "Keyboard",
  "메모리": "Memory",
  "화면": "Screen",
  "① 읽기": "① Read",
  "② 읽기": "② Read",
  "③ 표시": "③ Display",
  "다시 켬 · 파일 열기": "Power on · open file",
  // Page
  '컴퓨터의 구성 · 레슨 0.5': 'Parts of a computer · Lesson 0.5',
  '키보드에서 CPU, 메모리, 저장장치, 화면까지 데이터가 오가는 길을 단계별로 살펴보세요.':
    'Follow, step by step, the paths data takes between the keyboard, CPU, memory, storage and screen.',
  '입력, 처리, 저장, 출력은 어떻게 이어질까요? 글자 하나를 치고, 계산하고, 저장했다 다시 여는 동안 데이터가 지나는 길을 따라가 보세요.':
    'How do input, processing, storage and output connect? Follow the path data takes as you type a character, calculate, save and open a file again.',
  '데이터가 지나는 길': 'The path data takes', '컴퓨터 부품 사이의 데이터 경로': 'Data paths between the parts of a computer',
  '보내는 데이터': 'Data sent', '돌려받는 데이터': 'Data read back',
  // Parts
  '키보드 · 입력': 'Keyboard · input', 'CPU · 처리': 'CPU · processing', '화면 · 출력': 'Screen · output',
  // Badges
  '키보드에서 A 입력': 'A typed on the keyboard', 'CPU가 65를 전달': 'CPU passes on 65', '화면에 A 표시': 'A shown on screen',
  'A 표시': 'Shows A', '숫자 2와 3 입력': 'Numbers 2 and 3 typed', '메모리에서 읽고 더함': 'Reads from memory and adds',
  '화면에 5': '5 on screen', '5 표시': 'Shows 5', '2, 3 입력': '2, 3 typed', '2 + 3 = 5': '2 + 3 = 5', '결과 5': 'Result 5', '메모리에만 있는 값': 'Values only in memory',
  '저장 명령': 'Save command', '파일에 5 저장': '5 saved to file', '저장장치에 파일 생성': 'File created in storage',
  '파일 5 그대로': 'File 5 still there', '전원 꺼짐': 'Power off', '메모리 내용 사라짐': 'Memory contents gone', '저장한 파일은 남음': 'The saved file remains',
  '파일 열기': 'Open file', '파일 5': 'File 5', '5 불러옴': '5 loaded', '5 다시 표시': '5 shown again', '화면에 내용 표시': 'Contents shown on screen',
  '저장장치 → 메모리 → CPU': 'Storage → memory → CPU',
  // Step 1
  '입력과 출력': 'Input and output',
  '입력은 처리를 거쳐 출력된다': 'Input goes through processing to output',
  '키보드에서 A를 누르면 0.2에서 본 번호 65가 CPU로 갑니다. CPU(중앙 처리 장치)는 그 번호로 무엇을 할지 처리하고, 화면에 A를 그리라는 신호를 보냅니다. 마우스, 마이크, 카메라도 입력 장치이고 스피커, 프린터도 출력 장치입니다.':
    'Pressing A on the keyboard sends the number 65 from 0.2 to the CPU. The CPU (central processing unit) works out what to do with that number and sends a signal to draw A on the screen. A mouse, microphone and camera are input devices too, and speakers and printers are output devices.',
  '실선을 따라 키보드에서 CPU로, CPU에서 화면으로 데이터가 한 방향으로 흐릅니다.':
    'Along the solid lines, data flows one way: from the keyboard to the CPU and from the CPU to the screen.',
  '키보드, CPU, 화면이 있습니다. 키보드에서 입력한 A(65)가 CPU를 거쳐 화면으로 가서 표시됩니다.':
    'There is a keyboard, a CPU and a screen. A (65) typed on the keyboard goes through the CPU to the screen and is shown.',
  // Step 2
  '처리하는 동안 값은 메모리에 둔다': 'While processing, values stay in memory',
  'CPU가 메모리에 값을 적고(실선) 다시 읽어 옵니다(점선). 그다음 계산 결과 5가 화면으로 갑니다.':
    'The CPU writes values to memory (solid line) and reads them back (dashed line). Then the result, 5, goes to the screen.',
  '키보드, CPU, 메모리, 화면이 있습니다. 입력한 2와 3을 CPU가 메모리에 적고 다시 읽어 더한 뒤, 결과 5를 화면에 보냅니다.':
    'There is a keyboard, a CPU, memory and a screen. The CPU writes the typed 2 and 3 to memory, reads them back and adds them, then sends the result 5 to the screen.',
  // Step 3
  '오래 두려면 저장장치에 적는다': 'To keep data, write it to storage',
  '"저장"을 누르면 메모리에 있던 내용이 저장장치(SSD나 하드디스크)로 옮겨 적힙니다. 저장장치는 메모리보다 느리지만 전원이 꺼져도 내용이 남습니다. 우리가 파일이라고 부르는 것이 저장장치에 적힌 데이터입니다.':
    'Pressing "Save" copies what was in memory to storage (an SSD or hard disk). Storage is slower than memory, but its contents remain when the power goes off. What we call a file is data written in storage.',
  '메모리에서 저장장치로 실선이 이어집니다. 메모리와 화면의 5는 그대로이고, 저장장치에 result.txt의 5가 새로 생깁니다.':
    'A solid line connects RAM to storage. The 5 in RAM and on the screen stays, and result.txt gets its own copy in storage.',
  'CPU가 메모리의 내용을 저장장치로 보내 파일로 적습니다.': 'The CPU sends the contents of memory to storage and writes them as a file.',
  // Step 4
  '전원 끄기': 'Power off',
  '전원이 꺼지면 메모리만 비워진다': 'Power off empties only the memory',
  '컴퓨터를 끄면 메모리는 전기가 끊겨 내용이 모두 사라집니다. 저장장치에 적어 둔 파일은 그대로 남습니다. 저장하지 않고 끄면 작업이 날아가는 이유가 이것입니다.':
    'When the computer is turned off, memory loses power and everything in it disappears. Files written in storage remain. This is why work is lost if you turn off without saving.',
  'RAM의 5는 사라지고 화면이 꺼집니다. 같은 저장장치에는 result.txt와 그 안의 5가 그대로 남습니다.':
    'The 5 in RAM disappears and the screen goes off. The same storage still holds result.txt with its 5.',
  '전원이 꺼져 데이터가 흐르지 않습니다. 메모리는 비어 있고 저장장치의 파일은 그대로 남아 있습니다.':
    'The power is off, so no data flows. Memory is empty and the file in storage remains.',
  // Step 5
  '다시 열기': 'Opening again',
  '파일을 열면 저장장치에서 메모리로 올린다': 'Opening a file loads it from storage into memory',
  '전원을 다시 켜고 result.txt를 엽니다. 저장장치에 남아 있던 5가 메모리로 올라오고, CPU가 메모리에서 그 값을 읽어 화면에 보냅니다. 이번에는 2와 3을 새로 더하지 않아도 5를 확인할 수 있습니다.':
    'Turn the computer on and open result.txt. The 5 that stayed in storage loads into RAM. The CPU reads it from RAM and sends it to the screen. The original addition has already been done.',
  '점선을 따라 저장장치 → 메모리 → CPU로 데이터가 돌아오고, 실선으로 화면에 갑니다.':
    'Along the dashed lines, data comes back from storage → memory → CPU, then goes to the screen along a solid line.',
  '저장장치의 파일이 메모리로 올라오고, CPU가 메모리에서 읽어 화면에 보냅니다.':
    'The file in storage is loaded into memory, and the CPU reads it from memory and sends it to the screen.',
  '저장': 'Saving',
};
