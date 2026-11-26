// English for 5.5 File systems. Korean (the page) → English. Rules: DESIGN.md "두 언어".
// File names: 메모.txt notes.txt, 사진.jpg photo.jpg, 할일.txt todo.txt, 메모-사본.txt notes-copy.txt, 새 메모.txt new-note.txt.
window.lessonText = (() => {
const t = (text) => window.courseI18n?.translate(text) ?? text;
const blocks = (list) => `${list.includes(',') ? 'blocks' : 'block'} ${list}`;
return {
  // Page
  '파일 시스템 · 레슨 5.5': 'File systems · Lesson 5.5',
  '파일 이름이 디렉터리와 아이노드를 거쳐 디스크 블록으로 이어지는 길을 따라가며, 파일을 만들고, 덧붙이고, 지우고, 이름을 하나 더 붙여 보세요.':
    'Follow the path from a file name through the directory and inode to disk blocks, and make, append to, delete and add another name to files.',
  '파일 이름은 디스크의 어느 칸으로 이어질까요? 이름에서 아이노드를 거쳐 디스크 블록까지 가는 길을 따라가며 파일을 만들고 지워 보세요.':
    'Which cells on the disk does a file name lead to? Follow the path from a name through an inode to disk blocks, and make and delete files.',
  '디렉터리의 파일 이름이 아이노드를 거쳐 디스크 블록으로 이어지는 장면': 'File names in a directory leading through inodes to disk blocks',
  '이름, 아이노드, 블록': 'Names, inodes, blocks', '디렉터리와 아이노드': 'Directory and inodes', '디렉터리 (이름)': 'Directory (names)', '아이노드': 'Inodes', '디스크 블록': 'Disk blocks', '빈 블록': 'Free block', '지워졌지만 내용 남음': 'Deleted, contents remain', '방금 따라간 길': 'Path just followed',
  '파일 조작': 'File actions', '이름': 'Name', '블록 목록': 'Block list', '빈칸': 'free', '옛 내용': 'old contents',
  '{0} → #{1}': (name, ino) => `${t(name)} → #${ino}`, '{0}: 빈칸': (n) => `${n}: free`, '{0}: 옛 내용': (n) => `${n}: old`,
  // Files and readouts
  '메모.txt': 'notes.txt', '사진.jpg': 'photo.jpg', '할일.txt': 'todo.txt', '메모-사본.txt': 'notes-copy.txt', '새 메모.txt': 'new-note.txt',
  '이름 {#0}개': '{0} {0|name|names}', '블록 {#0}': 'Block {0}', '아이노드 {#0}': 'Inode {0}', '빈 블록 {#0}': 'Free block {0}', '빈 아이노드 {#0}': 'Free inode {0}', '블록 2·7': 'Blocks 2·7',
  '{0} 열기': 'Open {0}', '{0} 지우기': 'Delete {0}', '새 메모 만들기': 'Make a new note', '메모.txt에 덧붙이기': 'Append to notes.txt', '메모.txt에 이름 하나 더': 'Another name for notes.txt',
  '{0}은(는) 디렉터리에 없습니다.': (name) => `${t(name)} is not in the directory.`, '{0}은(는) 이미 없습니다.': (name) => `${t(name)} is already gone.`,
  '{0}는 이미 있습니다.': (name) => `${t(name)} already exists.`,
  '{0} → 디렉터리에서 아이노드 #{#1} → {2}을(를) 순서대로 읽습니다. (크기 {3})': (name, ino, list, size) => `${t(name)} → inode #${ino} from the directory → reads ${t(list)} in order (size ${size})`,
  '{0} → 디렉터리에서 아이노드 #{#1} → 블록 {2}을(를) 순서대로 읽습니다. (크기 {3})': (name, ino, list, size) => `${t(name)} → inode #${ino} from the directory → reads ${blocks(list)} in order (size ${size})`,
  '새 메모.txt를 만들었습니다. 빈 아이노드 #9와 첫 빈 블록 {#0}을(를) 받고, 디렉터리에 이름을 더했습니다.': 'Made new-note.txt. It got free inode #9 and the first free block, {0}, and its name was added to the directory.',
  '메모.txt에 덧붙였습니다. 블록 {#0}을(를) 더 받아 블록 목록이 {1}이(가) 됐습니다. 블록이 서로 떨어져 있어도 아이노드가 순서를 기억합니다.': 'Appended to notes.txt. It got block {0} more, so its block list became {1}. The inode remembers the order even when blocks are far apart.',
  '메모.txt의 아이노드가 없습니다.': 'notes.txt has no inode.',
  '메모-사본.txt를 만들었습니다. 내용을 복사하지 않고, 같은 아이노드 #3을 가리키는 이름만 더했습니다(하드 링크).': 'Made notes-copy.txt. Nothing was copied; only a name pointing to the same inode #3 was added (a hard link).',
  '{0} 이름만 지웠습니다. 아이노드 #{#1}는 다른 이름이 아직 가리키고 있어 블록을 그대로 둡니다.': (name, ino) => `Removed only the name ${t(name)}. Another name still points to inode #${ino}, so its blocks stay.`,
  '{0}을(를) 지웠습니다. 이름과 아이노드는 사라지고, 블록 {1}은(는) 빈 것으로 표시됐지만 옛 내용이 아직 남아 있습니다.': (name, list) => `Deleted ${t(name)}. The name and inode are gone, and ${blocks(list)} ${list.includes(',') ? 'are' : 'is'} marked free, but the old contents are still there.`,
  // Step 1
  '이름에서 블록까지': 'From name to blocks', '파일 이름 선택': 'Pick a file name', '디렉터리 → 아이노드': 'Directory → inode', '내용이 든 블록 찾음': 'Find the blocks with the contents',
  '이름 → 아이노드 번호': 'Name → inode number', '이름 조회': 'Look up the name', '블록 읽기': 'Read blocks',
  '파일 이름은 번호표를 거쳐 디스크 칸으로 간다': 'A file name goes through a number tag to cells on the disk',
  '디스크(SSD)는 같은 크기의 블록이 번호대로 늘어선 곳일 뿐, 파일이라는 것을 모릅니다. 파일 시스템이 그 위에 질서를 만듭니다. 디렉터리(폴더)는 "이름 → 아이노드 번호" 목록이고, 아이노드는 파일의 크기, 권한, 그리고 내용이 든 블록 번호들을 적어 둔 카드입니다. 5.3의 커널은 이 길을 따라 블록을 찾았습니다.':
    'A disk (SSD) is just same-sized blocks lined up by number; it knows nothing of files. A file system builds order on top. A directory (folder) is a list of "name → inode number", and an inode is a card noting the file\'s size, permissions and the numbers of the blocks holding its contents. The kernel in 5.3 followed this path to find blocks.',
  '"메모.txt 열기"를 누르면 이름 → 아이노드 3번 → 블록 2와 7로 선이 켜집니다. 한 파일의 블록이 이웃해 있지 않아도 괜찮습니다. 아이노드가 순서를 기억합니다.':
    'Press "Open notes.txt" and lines light up name → inode 3 → blocks 2 and 7. A file\'s blocks need not be neighbours; the inode remembers the order.',
  '왼쪽에 디렉터리의 파일 이름들, 가운데에 아이노드 카드들, 오른쪽에 번호가 붙은 디스크 블록 열두 개가 있습니다. 이름에서 아이노드로, 아이노드에서 블록으로 선이 이어집니다.':
    'On the left are the file names in the directory, in the middle the inode cards, and on the right twelve numbered disk blocks. Lines run from names to inodes and from inodes to blocks.',
  '"메모.txt"를 열어 보세요.': 'Open "notes.txt".', '이름 → 아이노드 3 → 블록 2, 7 순서로 찾아갔습니다.': 'It went name → inode 3 → blocks 2, 7 in order.',
  '"사진.jpg"의 내용이 든 블록 번호는 어디에 적혀 있을까요?': 'Where are the numbers of the blocks holding "photo.jpg" written?', '파일 이름 안': 'Inside the file name', '디스크 맨 앞 블록': 'The first block on the disk',
  '이름은 아이노드 번호만 가리키고, 블록 목록은 아이노드 카드에 있습니다.': 'A name points only to an inode number; the block list is on the inode card.',
  // Step 2
  '만들고 늘리기': 'Making and growing', '새 파일 쓰기': 'Write a new file', '빈 아이노드·블록 배정': 'Assign a free inode and block', '이름에서 데이터까지 연결': 'Link the name to the data', '새 파일': 'New file', '쓰기 전': 'Before writing',
  '새 파일은 빈 아이노드와 빈 블록을 받는다': 'A new file gets a free inode and a free block',
  '파일을 만들면 파일 시스템이 빈 아이노드 하나와 빈 블록을 찾아 주고, 디렉터리에 "이름 → 아이노드" 줄을 더합니다. 파일에 내용을 덧붙이면 블록이 더 필요해지는데, 바로 옆 블록이 차 있으면 멀리 떨어진 빈 블록을 씁니다. 그래서 오래 쓴 디스크는 파일 조각이 흩어집니다(단편화).':
    'Making a file has the file system find one free inode and a free block, and add a "name → inode" row to the directory. Appending to a file needs more blocks, and if the next block is taken, a free block far away is used. That is why a long-used disk has file pieces scattered about (fragmentation).',
  '"새 메모 만들기"는 아이노드 9와 첫 빈 블록 3을 받습니다. "메모.txt에 덧붙이기"를 하면 메모.txt의 블록 목록에 떨어진 빈 블록이 하나 더 붙습니다.':
    '"Make a new note" gets inode 9 and the first free block, 3. "Append to notes.txt" adds one more free block, far away, to notes.txt\'s block list.',
  '같은 장면입니다. 파일을 만들거나 덧붙이면 빈 블록이 새로 배정되어 색이 칠해집니다.': 'The same scene. Making or appending to a file assigns a free block, which gets coloured in.',
  '"새 메모 만들기"를 눌러 보세요.': 'Press "Make a new note".', '빈 아이노드와 빈 블록을 받고, 디렉터리에 이름이 생겼습니다.': 'It got a free inode and a free block, and its name appeared in the directory.',
  '"메모.txt에 덧붙이기"를 눌러 보세요.': 'Press "Append to notes.txt".', '메모.txt의 블록이 셋이 됐고, 서로 떨어져 있습니다.': 'notes.txt now has three blocks, apart from each other.',
  // Step 3
  '지우기': 'Deleting', '파일 삭제': 'Delete a file', '블록을 빈칸으로 표시': 'Mark the blocks free', '다음 쓰기에서 덮어씀': 'Overwritten on the next write',
  '삭제 전': 'Before deleting', '이름 제거': 'Remove the name', '삭제 후': 'After deleting', '빈 것': 'free',
  '지워도 내용은 바로 사라지지 않는다': 'Deleting does not make the contents vanish at once',
  '파일을 지우면 파일 시스템은 디렉터리에서 이름을 빼고, 아이노드와 블록을 "빈 것"으로 표시합니다. 블록의 내용을 0으로 덮어쓰지는 않습니다. 그래서 다른 파일이 그 블록을 다시 쓰기 전까지는 복구 프로그램으로 되살릴 수도 있습니다. 중요한 파일을 확실히 지우려면 덮어쓰기가 필요합니다.':
    'Deleting a file has the file system remove its name from the directory and mark its inode and blocks "free". It does not overwrite the blocks\' contents with 0. So until another file reuses those blocks, a recovery program may bring the file back. Deleting an important file for sure takes overwriting.',
  '"사진.jpg 지우기"를 누르면 이름과 아이노드는 사라지지만, 블록 0, 1, 4, 5에는 "지워짐(내용 남음)" 표시가 붙습니다. 이어서 새 파일을 만들면 그 블록이 재사용되며 진짜로 덮어써집니다.':
    'Press "Delete photo.jpg" and the name and inode vanish, but blocks 0, 1, 4 and 5 get a "deleted (contents remain)" mark. Make a new file after that and those blocks are reused and truly overwritten.',
  '같은 장면입니다. 파일을 지우면 블록이 빈 블록이 되지만 옛 내용을 품은 채로 남아 있다가, 새 파일이 쓰면 덮어써집니다.': 'The same scene. Deleting a file makes its blocks free, but they keep the old contents until a new file writes over them.',
  '"사진.jpg 지우기"를 눌러 보세요.': 'Press "Delete photo.jpg".', '이름은 사라졌지만 블록에는 옛 내용이 남아 있습니다.': 'The name is gone, but the old contents remain in the blocks.',
  '지운 직후 "사진.jpg"를 되살릴 수 있을 가능성은?': 'Right after deleting, what are the chances of bringing "photo.jpg" back?', '전혀 없다': 'None at all', '블록을 덮어쓰기 전이면 있다': 'Some, until the blocks are overwritten',
  '빈 것으로 표시만 했을 뿐 내용은 그대로라, 덮어쓰기 전에는 복구할 수 있습니다.': 'They were only marked free and the contents are unchanged, so it can be recovered before being overwritten.',
  // Step 4
  '이름 두 개': 'Two names', '같은 파일에 이름 추가': 'Add a name to the same file', '두 이름 → 한 아이노드': 'Two names → one inode', '데이터 블록은 한 벌': 'One set of data blocks',
  '기존 이름': 'Existing name', '추가한 이름': 'Added name', '아이노드 3 · 이름 2개': 'Inode 3 · 2 names', '아이노드 5 · 이름 1개': 'Inode 5 · 1 name', '이름 0개 → 아이노드 해제': '0 names → inode freed', '블록 0·1·4·5': 'Blocks 0·1·4·5', '블록: 옛 내용 남음': 'Blocks: old contents stay', '블록 2·7 (복사 안 함)': 'Blocks 2·7 (not copied)',
  '한 파일에 이름이 여러 개일 수 있다': 'One file can have several names',
  '이름과 내용이 따로 있으므로, 디렉터리에 같은 아이노드를 가리키는 이름을 하나 더 만들 수 있습니다(하드 링크). 두 이름은 같은 파일이라 한쪽으로 고치면 다른 쪽에도 보입니다. 아이노드는 자기를 가리키는 이름 수를 세다가, 0이 될 때 비로소 블록을 놓아줍니다.':
    'Since names and contents are kept apart, the directory can have another name pointing to the same inode (a hard link). The two names are the same file, so a change through one shows through the other. An inode counts the names pointing to it, and only lets go of its blocks when that count reaches 0.',
  '"메모.txt에 이름 하나 더"를 누르면 "메모-사본.txt"가 같은 아이노드 3을 가리키고, 아이노드의 이름 수가 2가 됩니다. 메모.txt를 지워도 블록은 그대로입니다.':
    'Press "Another name for notes.txt" and "notes-copy.txt" points to the same inode 3, whose name count becomes 2. Deleting notes.txt leaves the blocks as they are.',
  '같은 장면입니다. 이름을 하나 더 만들면 두 이름에서 같은 아이노드로 선이 이어집니다.': 'The same scene. Making another name joins both names to the same inode with lines.',
  '"메모.txt에 이름 하나 더"를 눌러 보세요.': 'Press "Another name for notes.txt".', '두 이름이 같은 아이노드 3을 가리킵니다.': 'Both names point to the same inode 3.',
  '이제 "메모.txt 지우기"를 눌러 보세요.': 'Now press "Delete notes.txt".', '이름 하나만 사라졌고, 아이노드 3과 블록은 메모-사본.txt로 여전히 쓰입니다.': 'Only one name vanished; inode 3 and its blocks are still in use through notes-copy.txt.',
  '아이노드가 블록을 놓아주는 때는?': 'When does an inode let go of its blocks?', '이름 하나라도 지워질 때': 'When any one name is deleted', '가리키는 이름 수가 0이 될 때': 'When the number of names pointing to it reaches 0', '컴퓨터를 끌 때': 'When the computer is turned off',
  '아직 다른 이름이 쓰고 있으면 내용을 지우면 안 되기 때문입니다.': 'Because the contents must not be removed while another name is still using them.',
};
})();
