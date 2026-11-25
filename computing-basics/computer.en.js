// English for 0.5 Parts of a computer. Korean (the page) → English. Rules: DESIGN.md "두 언어".
window.lessonText = {
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
  '메모리': 'Memory', '저장장치': 'Storage',
  // Badges
  '키보드에서 A 입력': 'A typed on the keyboard', 'CPU가 65를 전달': 'CPU passes on 65', '화면에 A 표시': 'A shown on screen',
  'A 표시': 'Shows A', '숫자 2와 3 입력': 'Numbers 2 and 3 typed', '메모리에서 읽고 더함': 'Reads from memory and adds',
  '화면에 5': '5 on screen', '5 표시': 'Shows 5', '2, 3 입력': '2, 3 typed', '2 + 3 = 5': '2 + 3 = 5', '결과 5': 'Result 5', '메모리에만 있는 값': 'Values only in memory',
  '저장 명령': 'Save command', '파일에 5 저장': '5 saved to file', '저장장치에 파일 생성': 'File created in storage',
  '비어 있음': 'Empty', '파일 5 그대로': 'File 5 still there', '전원 꺼짐': 'Power off', '메모리 내용 사라짐': 'Memory contents gone', '저장한 파일은 남음': 'The saved file remains',
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
  '2 + 3을 계산하려면 2와 3을 어딘가에 잠시 두어야 합니다. CPU는 계산 중인 값을 메모리(RAM)에 적어 두었다가 필요할 때 다시 읽어 옵니다. 메모리는 CPU 바로 옆에 있어 빠르지만, 전원이 꺼지면 내용이 사라집니다.':
    'To calculate 2 + 3, the 2 and the 3 have to be kept somewhere for a moment. The CPU writes the values it is working on into memory (RAM) and reads them back when needed. Memory sits right next to the CPU and is fast, but its contents disappear when the power goes off.',
  'CPU가 메모리에 값을 적고(실선) 다시 읽어 옵니다(점선). 그다음 계산 결과 5가 화면으로 갑니다.':
    'The CPU writes values to memory (solid line) and reads them back (dashed line). Then the result, 5, goes to the screen.',
  '키보드, CPU, 메모리, 화면이 있습니다. 입력한 2와 3을 CPU가 메모리에 적고 다시 읽어 더한 뒤, 결과 5를 화면에 보냅니다.':
    'There is a keyboard, a CPU, memory and a screen. The CPU writes the typed 2 and 3 to memory, reads them back and adds them, then sends the result 5 to the screen.',
  // Step 3
  '오래 두려면 저장장치에 적는다': 'To keep data, write it to storage',
  '"저장"을 누르면 메모리에 있던 내용이 저장장치(SSD나 하드디스크)로 옮겨 적힙니다. 저장장치는 메모리보다 느리지만 전원이 꺼져도 내용이 남습니다. 우리가 파일이라고 부르는 것이 저장장치에 적힌 데이터입니다.':
    'Pressing "Save" copies what was in memory to storage (an SSD or hard disk). Storage is slower than memory, but its contents remain when the power goes off. What we call a file is data written in storage.',
  '메모리에서 저장장치로 실선이 이어지고, 메모리의 "결과 5"가 저장장치 위에 "파일에 5 저장"으로 뜹니다.':
    'A solid line runs from memory to storage, and the "Result 5" in memory appears above the storage as "5 saved to file".',
  'CPU가 메모리의 내용을 저장장치로 보내 파일로 적습니다.': 'The CPU sends the contents of memory to storage and writes them as a file.',
  // Step 4
  '전원 끄기': 'Power off',
  '전원이 꺼지면 메모리만 비워진다': 'Power off empties only the memory',
  '컴퓨터를 끄면 메모리는 전기가 끊겨 내용이 모두 사라집니다. 저장장치에 적어 둔 파일은 그대로 남습니다. 저장하지 않고 끄면 작업이 날아가는 이유가 이것입니다.':
    'When the computer is turned off, memory loses power and everything in it disappears. Files written in storage remain. This is why work is lost if you turn off without saving.',
  '선이 모두 사라지고 저장장치 말고는 모두 회색이 됩니다. CPU 위에 "전원 꺼짐", 메모리 위에 "비어 있음", 저장장치 위에 "파일 5 그대로"가 뜹니다.':
    'All the lines disappear and everything but the storage turns grey. "Power off" appears above the CPU, "Empty" above memory and "File 5 still there" above storage.',
  '전원이 꺼져 데이터가 흐르지 않습니다. 메모리는 비어 있고 저장장치의 파일은 그대로 남아 있습니다.':
    'The power is off, so no data flows. Memory is empty and the file in storage remains.',
  // Step 5
  '다시 열기': 'Opening again',
  '파일을 열면 저장장치에서 메모리로 올린다': 'Opening a file loads it from storage into memory',
  '다시 켜서 파일을 열면 저장장치의 내용이 메모리로 올라오고, CPU가 그것을 처리해 화면에 보여 줍니다. CPU는 저장장치를 직접 다루지 않고 항상 메모리를 거칩니다. 프로그램을 실행할 때도 같은 일이 일어납니다.':
    'Turn it on again and open the file: the contents of storage are loaded into memory, and the CPU processes them and shows them on screen. The CPU never works on storage directly; it always goes through memory. The same happens when a program runs.',
  '점선을 따라 저장장치 → 메모리 → CPU로 데이터가 돌아오고, 실선으로 화면에 갑니다.':
    'Along the dashed lines, data comes back from storage → memory → CPU, then goes to the screen along a solid line.',
  '저장장치의 파일이 메모리로 올라오고, CPU가 메모리에서 읽어 화면에 보냅니다.':
    'The file in storage is loaded into memory, and the CPU reads it from memory and sends it to the screen.',
  '저장': 'Saving',
};
