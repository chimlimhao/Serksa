<div class="sidebar-wrap">
    <div class="html-sidebar">
        <div class="header">
            <div class="lang-icon">
                <img src="{{ $courses->img }}" alt="">
            </div>
            <div class="lang-context">
                <h5>Programming Language:</h5>
                <h5>{{ $courses->title }}</h5>
                <h6>{{ $courses->chapters->count() }} Chapters</h6>
            </div>
        </div>
        <div class="middle">
            <ul>
                @foreach($courses->chapters as $index => $chapter)
                <li > <!-- Check if it's the first chapter -->
                    <a href="{{ route('course-content', ['courseId' => $courses->id, 'chapterId' => $chapter->id]) }}" onclick="handleChapterClick(this)">
                        <h4>Chapter {{ $chapter->chapter_order }}:</h4>
                        <p>{{ $chapter->chapter_title }}</p>
                    </a>
                </li>
                @endforeach
            </ul>
        </div>
    </div>
</div>



{{-- <div class="sidebar-wrap">
    <div class="html-sidebar">
        <div class="header">
            <div class="lang-icon">
                <img src="https://cdn-icons-png.flaticon.com/128/174/174854.png" alt="">
            </div>
            <div class="lang-context">
                <h5>Progamming Language:</h5>
                <h5>HTML</h5>
                <h6>9 Chapters</h6>
            </div>
        </div>
        <div class="middle">
            <ul>
                <li class="active">
                    <a href="">
                        <h4>Chapter 1:</h4>
                        <p>Introduction To HTML</p>
                    </a>
                </li>
                <li>
                    <a href="">
                        <h4>Chapter 2:</h4>
                        <p>Introduction To HTML</p>
                    </a>
                </li>
                <li>
                    <a href="">
                        <h4>Chapter 3:</h4>
                        <p>Introduction To HTML</p>
                    </a>
                </li>
                <li>
                    <a href="">
                        <h4>Chapter 4:</h4>
                        <p>Introduction To HTML</p>
                    </a>
                </li>
                <li>
                    <a href="">
                        <h4>Chapter 5:</h4>
                        <p>Introduction To HTML</p>
                    </a>
                </li>
                <li>
                    <a href="">
                        <h4>Chapter 6:</h4>
                        <p>Introduction To HTML</p>
                    </a>
                </li>
                <li>
                    <a href="">
                        <h4>Chapter 7:</h4>
                        <p>Introduction To HTML</p>
                    </a>
                </li>
                <li>
                    <a href="">
                        <h4>Chapter 8:</h4>
                        <p>Introduction To HTML</p>
                    </a>
                </li>
                <li>
                    <a href="">
                        <h4>Chapter 9:</h4>
                        <p>Introduction To HTML</p>
                    </a>
                </li>
            </ul>
        </div>
    </div>
</div> --}}