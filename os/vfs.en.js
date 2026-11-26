// English for OS 5.4 VFS and mounts. Korean (the page) → English. Rules: DESIGN.md "두 언어".
window.lessonText = {
  // Page
  'VFS와 마운트 · 레슨 5.4': 'VFS and mounts · Lesson 5.4',
  '운영체제 5장 장치와 파일 · 레슨 5.4': 'Operating systems chapter 5 Devices and files · Lesson 5.4',
  '운영체제 5장 장치와 파일 · Lesson 5.4': 'Operating systems chapter 5 Devices and files · Lesson 5.4',
  'VFS와 마운트': 'VFS and mounts',
  '같은 read를 파일 시스템마다 다른 코드로 보내는 VFS, 폴더를 다른 장치에 잇는 mount, 경로 중간에서 파일 시스템이 바뀌는 길, RAM에만 있는 tmpfs를 한 정거장씩 따라가 보세요.':
    'Follow, one station at a time, the VFS sending the same read to different code for each file system, mount joining a folder to another device, a path that changes file system partway, and tmpfs that lives only in RAM.',
  '디스크 파일, USB, /proc, RAM 속 파일을 프로그램은 어떻게 모두 같은 read로 다룰까요? 경로가 VFS를 거쳐 알맞은 파일 시스템에 닿는 길을 한 정거장씩 따라가 보세요.':
    'How can a program handle disk files, a USB stick, /proc and files in RAM all with the same read? Follow, station by station, a path\'s road through the VFS to the right file system.',
  '프로그램, VFS, 파일 시스템, 저장 위치': 'Program, VFS, file system, storage',
  '프로그램의 read가 VFS를 거쳐 경로에 맞는 파일 시스템(ext4, proc, vfat, xfs, tmpfs)으로 가는 장면': 'A program\'s read goes through the VFS to the file system that matches the path (ext4, proc, vfat, xfs, tmpfs)',
  '사용자 영역': 'User space', '커널 영역': 'Kernel space', '커널 영역 · 하드웨어': 'Kernel space · hardware',
  '프로세스': 'Process', '커널': 'Kernel',
  '"다음 단계"를 누르면 신호가 한 정거장씩 움직입니다.': 'Press "Next step" and the signal moves one station at a time.',
  '"다음 단계"를 눌러 신호를 한 정거장씩 옮겨 보세요. 중간에 예측 문제가 나옵니다.': 'Press "Next step" to move the signal one station at a time. Prediction questions come up along the way.',
  // Stations
  '프로그램': 'Program', 'USB 메모리': 'USB stick', '디스크 2': 'Disk 2',
  // Legs
  '프로그램 → VFS': 'Program → VFS', 'proc → 프로그램': 'proc → Program', 'vfat → USB 메모리': 'vfat → USB stick', 'xfs (/home) → 디스크 2': 'xfs (/home) → Disk 2',
  'proc · 글': 'proc · text', '글': 'text', '글 ×2': 'text ×2', 'VFS · 글 ×2': 'VFS · text ×2', 'VFS → 프로그램': 'VFS → Program', 'ext4와 proc이 만든 글을 받음': 'gets the text ext4 and proc made', '두 파일 시스템이 만든 글이 VFS로 돌아옵니다.': 'The text the two file systems made comes back to the VFS.', '건너감': 'cross over', '/ 에서 home': 'home under /',
  // Step 1
  '같은 read': 'Same read',
  'VFS는 같은 read를 파일 시스템마다 다른 코드로 보낸다': 'The VFS sends the same read to different code for each file system',
  '리눅스 커널에는 VFS(가상 파일 시스템)라는 공통 층이 있습니다. 프로그램이 read를 부르면 VFS는 그 파일이 어느 파일 시스템에 속하는지 보고, 그 파일 시스템이 등록해 둔 read 함수를 부릅니다. /home/a.txt는 ext4라 디스크 블록을 읽고, /proc/meminfo는 proc이라 디스크 없이 커널이 가진 값으로 그 자리에서 글을 만들어 줍니다. 프로그램 쪽에서는 둘 다 똑같은 read입니다.':
    'The Linux kernel has a common layer called the VFS (virtual file system). When a program calls read, the VFS looks at which file system the file belongs to and calls the read function that file system registered. /home/a.txt is on ext4, so disk blocks are read; /proc/meminfo is on proc, so the kernel makes the text on the spot from values it holds, with no disk. To the program, both are the very same read.',
  '프로그램 이름표가 "같은 read ×2"이고, VFS 이름표가 "경로로 나눔"이 됩니다. ext4 이름표는 "a.txt: 블록", proc 이름표는 "meminfo: 값"이 됩니다.':
    'The program\'s label is "same read ×2", and the VFS label becomes "split by path". The ext4 label becomes "a.txt: blocks" and the proc label "meminfo: values".',
  '왼쪽 사용자 영역에 프로그램이, 경계 너머에 VFS, ext4 파일 시스템, proc 파일 시스템이 있습니다. 프로그램이 /home/a.txt와 /proc/meminfo를 읽습니다.':
    'The program is in user space on the left; across the boundary are the VFS, the ext4 file system and the proc file system. The program reads /home/a.txt and /proc/meminfo.',
  'VFS가 파일 시스템을 보고 나눔': 'the VFS splits them by file system',
  'ext4: 디스크 블록 · proc: 커널 값으로 글을 만듦': 'ext4: disk blocks · proc: text made from kernel values',
  '같은 read ×2': 'same read ×2', '경로로 나눔': 'split by path', 'a.txt: 블록': 'a.txt: blocks', 'meminfo: 값': 'meminfo: values',
  'a.txt는 ext4': 'a.txt is on ext4', 'meminfo는 proc': 'meminfo is on proc',
  '두 read 모두 VFS에 닿습니다. VFS가 각 파일의 파일 시스템을 봅니다.': 'Both reads reach the VFS. The VFS looks at each file\'s file system.',
  '/proc/meminfo를 읽을 때 디스크를 읽을까요?': 'Does reading /proc/meminfo read the disk?',
  '디스크에서 읽는다': 'It reads from disk', '커널이 그 자리에서 만들어 준다': 'The kernel makes it on the spot', '캐시에만 있다': 'It is only in the cache',
  'proc은 디스크가 없는 파일 시스템입니다. read가 오면 커널이 지금 가진 값으로 글을 만들어 돌려줍니다.': 'proc is a file system with no disk. When a read comes, the kernel makes the text from the values it holds right now and returns it.',
  '✓ Correct. proc은 디스크가 없는 파일 시스템입니다. read가 오면 커널이 지금 가진 값으로 글을 만들어 돌려줍니다.': '✓ Correct. proc is a file system with no disk. When a read comes, the kernel makes the text from the values it holds right now and returns it.',
  '✗ Not 디스크에서 읽는다. Choose again.': '✗ Not "It reads from disk". Choose again.',
  '아이노드 → 디스크 블록': 'inode → disk blocks',
  'a.txt는 ext4의 read가 맡아 디스크 블록을 읽습니다.': 'ext4\'s read handles a.txt and reads disk blocks.',
  'MemTotal: … 글을 만듦': 'makes the text MemTotal: …', '디스크 없음': 'no disk',
  'meminfo는 proc의 read가 맡아 커널의 메모리 통계로 글을 만듭니다.': 'proc\'s read handles meminfo and makes the text from the kernel\'s memory statistics.',
  '두 read 모두 글을 받음': 'both reads get text',
  '프로그램은 두 read에서 똑같이 글을 받습니다.': 'The program gets text from both reads in the same way.',
  // Step 2
  'mount로 붙이기': 'Attach with mount',
  'mount는 폴더 하나를 다른 장치의 파일 시스템에 잇는다': 'mount joins a folder to another device\'s file system',
  'USB 메모리를 꽂으면 /dev/sdb1이라는 장치가 생기지만, 그 안의 파일을 경로로 열려면 어딘가에 붙여야 합니다. mount /dev/sdb1 /mnt/usb는 VFS의 마운트 표에 "/mnt/usb 아래는 sdb1의 vfat 파일 시스템"이라고 적습니다. 그 뒤 /mnt/usb/photo.jpg를 열면 VFS가 /mnt/usb에서 USB의 파일 시스템으로 건너갑니다. 원래 /mnt/usb 폴더에 있던 것은 mount가 풀릴 때까지 가려집니다.':
    'Plugging in a USB stick creates a device called /dev/sdb1, but to open the files on it by path it has to be attached somewhere. mount /dev/sdb1 /mnt/usb writes in the VFS mount table "below /mnt/usb is sdb1\'s vfat file system". After that, opening /mnt/usb/photo.jpg makes the VFS cross from /mnt/usb into the USB\'s file system. Whatever was in the /mnt/usb folder before stays hidden until the mount is undone.',
  'mount가 VFS로 가 VFS 이름표가 "/mnt/usb=sdb1"이 됩니다. open이 VFS를 지나 vfat로 가고 USB 이름표가 "photo.jpg"가 되며, 프로그램 이름표가 "폴더처럼 열림"이 됩니다.':
    'mount goes to the VFS and the VFS label becomes "/mnt/usb=sdb1". open passes the VFS to vfat, the USB label becomes "photo.jpg", and the program label becomes "opens like a folder".',
  '왼쪽 사용자 영역에 프로그램이, 경계 너머에 VFS, vfat 파일 시스템, USB 메모리가 있습니다. /mnt/usb는 빈 폴더입니다.':
    'The program is in user space on the left; across the boundary are the VFS, the vfat file system and the USB stick. /mnt/usb is an empty folder.',
  '마운트 표: /mnt/usb = sdb1(vfat)': 'mount table: /mnt/usb = sdb1(vfat)',
  'open(/mnt/usb/photo.jpg) → USB로': 'open(/mnt/usb/photo.jpg) → to the USB',
  '/mnt/usb: 빈 폴더': '/mnt/usb: empty', '마운트 표에 추가': 'added to the mount table',
  'mount가 VFS의 마운트 표에 /mnt/usb와 USB의 파일 시스템을 잇습니다.': 'mount joins /mnt/usb to the USB\'s file system in the VFS mount table.',
  'mount 뒤 /mnt/usb/photo.jpg를 열면 어디로 갈까요?': 'After mount, where does opening /mnt/usb/photo.jpg go?',
  '원래 디스크의 빈 폴더': 'The empty folder on the original disk', '열 수 없다': 'It cannot be opened',
  '마운트 표가 /mnt/usb 아래를 USB의 파일 시스템으로 잇습니다. 경로는 그대로지만 가리키는 곳이 바뀌었습니다.': 'The mount table joins everything below /mnt/usb to the USB\'s file system. The path is the same, but what it points to has changed.',
  '✓ Correct. 마운트 표가 /mnt/usb 아래를 USB의 파일 시스템으로 잇습니다. 경로는 그대로지만 가리키는 곳이 바뀌었습니다.': '✓ Correct. The mount table joins everything below /mnt/usb to the USB\'s file system. The path is the same, but what it points to has changed.',
  '✗ Not 원래 디스크의 빈 폴더. Choose again.': '✗ Not "The empty folder on the original disk". Choose again.',
  'USB의 파일 시스템이 맡음': 'the USB\'s file system takes over',
  'photo.jpg를 열자 VFS가 /mnt/usb에서 vfat 파일 시스템으로 건너갑니다.': 'Opening photo.jpg, the VFS crosses at /mnt/usb into the vfat file system.',
  'vfat가 맡음': 'vfat handles it', '폴더처럼 열림': 'opens like a folder',
  'USB에서 photo.jpg를 찾음': 'finds photo.jpg on the USB',
  'vfat가 USB 메모리에서 photo.jpg를 찾아 읽습니다.': 'vfat finds photo.jpg on the USB stick and reads it.',
  // Step 3
  '경로 따라가기': 'Follow the path',
  '경로 중간에 마운트 지점이 있으면 다른 파일 시스템으로 건너간다': 'A mount point in the middle of a path crosses into another file system',
  '/home/kim/x.txt를 열면 VFS는 /부터 한 칸씩 내려갑니다. /는 NVMe 디스크의 ext4라 ext4에서 home을 찾습니다. 그런데 /home은 두 번째 디스크의 xfs가 붙은 마운트 지점입니다. VFS는 여기서 xfs로 건너가 kim과 x.txt를 xfs에서 찾습니다. 그래서 x.txt는 두 번째 디스크에 있습니다. 프로그램은 경로가 디스크 두 개에 걸쳐 있다는 것을 모릅니다.':
    'Opening /home/kim/x.txt, the VFS walks down one part at a time from /. / is ext4 on the NVMe disk, so home is looked up in ext4. But /home is a mount point where the second disk\'s xfs is attached. Here the VFS crosses into xfs and looks up kim and x.txt in xfs. So x.txt is on the second disk. The program does not know the path spans two disks.',
  'VFS 이름표가 "/home=xfs"가 됩니다. 경로가 /home에서 xfs로 건너가 xfs 이름표가 "x.txt 찾음", 디스크 2 이름표가 "x.txt"가 됩니다.':
    'The VFS label becomes "/home=xfs". The path crosses into xfs at /home, the xfs label becomes "found x.txt", and the Disk 2 label becomes "x.txt".',
  '왼쪽 사용자 영역에 프로그램이, 경계 너머에 VFS, ext4(디스크 1), xfs, 디스크 2가 있습니다. /home은 디스크 2의 xfs가 붙은 마운트 지점입니다.':
    'The program is in user space on the left; across the boundary are the VFS, ext4 (disk 1), xfs and Disk 2. /home is a mount point where Disk 2\'s xfs is attached.',
  '/ 는 ext4': '/ is ext4', '/home 에서 마운트 지점 → xfs (디스크 2)': 'mount point at /home → xfs (disk 2)', 'x.txt는 디스크 2에': 'x.txt is on disk 2',
  '마운트 표': 'Mount table', '/부터 한 칸씩': 'one part at a time from /',
  'VFS가 경로를 /부터 한 칸씩 따라갑니다.': 'The VFS follows the path one part at a time from /.',
  'home 폴더를 찾음': 'finds the home folder', '마운트 지점 표시가 있음': 'it is marked as a mount point',
  'ext4에서 home을 찾았지만, 그 자리는 마운트 지점입니다.': 'home is found in ext4, but that spot is a mount point.',
  '마운트 지점': 'mount point',
  '/home에서 VFS는 어떻게 할까요?': 'What does the VFS do at /home?',
  'ext4에서 계속 찾는다': 'It keeps looking in ext4', '붙어 있는 xfs로 건너간다': 'It crosses into the attached xfs', '찾기를 멈춘다': 'It stops looking',
  '마운트 표에 /home은 두 번째 디스크의 xfs로 적혀 있습니다. 그 아래 경로는 xfs가 맡습니다.': 'The mount table lists /home as the second disk\'s xfs. xfs handles the path below it.',
  '✓ Correct. 마운트 표에 /home은 두 번째 디스크의 xfs로 적혀 있습니다. 그 아래 경로는 xfs가 맡습니다.': '✓ Correct. The mount table lists /home as the second disk\'s xfs. xfs handles the path below it.',
  'kim → x.txt를 찾음': 'finds kim → x.txt',
  'VFS가 xfs로 건너가 kim과 x.txt를 찾습니다.': 'The VFS crosses into xfs and finds kim and x.txt.',
  'x.txt 찾음': 'found x.txt', 'x.txt의 블록을 읽음': 'reads x.txt\'s blocks',
  'x.txt는 두 번째 디스크에 있습니다.': 'x.txt is on the second disk.',
  // Step 4
  'RAM 속 파일': 'Files in RAM',
  'tmpfs의 파일은 디스크 없이 RAM에만 있다': 'tmpfs files live only in RAM, with no disk',
  '/tmp나 /run은 흔히 tmpfs로 붙어 있습니다. tmpfs는 파일 내용을 디스크에 쓰지 않고 3.6의 페이지 캐시(RAM)에만 둡니다. 그래서 읽고 쓰기가 빠르지만, 전원을 끄거나 재부팅하면 내용이 사라집니다. 메모리가 모자라면 스왑으로 밀려날 수는 있습니다. 컨테이너와 임시 파일, 소켓 파일처럼 잠깐 쓰고 버릴 것에 알맞습니다.':
    '/tmp and /run are often attached as tmpfs. tmpfs never writes file contents to disk and keeps them only in the page cache (RAM) from 3.6. So reading and writing are fast, but the contents vanish when the power goes off or the machine reboots. When memory runs short they can be pushed out to swap. It suits things used briefly and thrown away, like container scratch files, temporary files and socket files.',
  'VFS 이름표가 "/tmp=tmpfs"가 되고, write가 tmpfs로 가 tmpfs 이름표가 "디스크 없음"이 됩니다. RAM 이름표가 "꺼지면 사라짐"이 됩니다.':
    'The VFS label becomes "/tmp=tmpfs", write goes to tmpfs and the tmpfs label becomes "no disk". The RAM label becomes "gone at power-off".',
  '왼쪽 사용자 영역에 프로그램이, 경계 너머에 VFS, tmpfs, RAM이 있습니다. /tmp는 tmpfs로 붙어 있습니다.':
    'The program is in user space on the left; across the boundary are the VFS, tmpfs and RAM. /tmp is attached as tmpfs.',
  '디스크 없이 RAM(페이지 캐시)에만': 'only in RAM (page cache), no disk', '빠르지만 꺼지면 사라짐': 'fast, but gone at power-off',
  '/tmp는 tmpfs': '/tmp is tmpfs',
  'write가 VFS에 닿고, /tmp는 tmpfs라는 것을 마운트 표에서 찾습니다.': 'write reaches the VFS, which finds in the mount table that /tmp is tmpfs.',
  '디스크에 쓰지 않음': 'does not write to disk',
  'tmpfs는 디스크를 쓰지 않습니다.': 'tmpfs does not use a disk.',
  '재부팅한 뒤 /tmp/cache는 남아 있을까요?': 'Is /tmp/cache still there after a reboot?',
  '남아 있다': 'It is still there', '사라진다': 'It is gone', '디스크로 옮겨져 있다': 'It has been moved to disk',
  'tmpfs의 파일은 RAM에만 있습니다. 전원이 꺼지면 RAM의 내용도 사라집니다.': 'tmpfs files are only in RAM. When the power goes off, what is in RAM goes too.',
  '✓ Correct. tmpfs의 파일은 RAM에만 있습니다. 전원이 꺼지면 RAM의 내용도 사라집니다.': '✓ Correct. tmpfs files are only in RAM. When the power goes off, what is in RAM goes too.',
  '페이지 캐시에만 둠': 'kept only in the page cache',
  '내용은 RAM의 페이지 캐시에만 있습니다. 빠르지만 재부팅하면 사라집니다.': 'The contents are only in RAM\'s page cache. Fast, but gone after a reboot.',
  '꺼지면 사라짐': 'gone at power-off',
};
