<div class="catalog-sidebar">
    <ul>
        <h2 onclick="toggleSidebarMenu('languages', 'languagesIcon')">
            Languages
            <span id="languagesIcon" class="arrow-icon">^</span>
        </h2>
        <div class="sidebar-menu" id="languages">
            @if ($courses && $courses instanceof Illuminate\Database\Eloquent\Collection)
                @foreach ($courses as $course)
                    <li><a
                            href="{{ route('doc-content', ['courseId' => $course->id]) }}"><span>{{ $course->title }}</span></a>
                    </li>
                @endforeach
            @else
                <p>No courses found.</p>
            @endif

            {{-- <li><a href=""><span>CSS</span></a>
            <li><a href=""><span>JavaScript</span></a>
            <li><a href=""><span>Java</span></a>
            <li><a href=""><span>Python</span></a>
            <li><a href=""><span>C</span></a>
            <li><a href=""><span>C++</span></a>
            <li><a href=""><span>Php</span></a>
            <li><a href=""><span>SQL</span></a> --}}
        </div>
        <h2 onclick="toggleSidebarMenu('subjects', 'subjectsIcon')">
            Major Subjects
            <span id="subjectsIcon" class="arrow-icon">^</span>
        </h2>
        <div class="sidebar-menu" id="subjects">
            <li><a href=""><span>Computer Science</span></a>
            <li><a href=""><span>Software Engineer</span></a>
            <li><a href=""><span>Data Science</span></a>
            <li><a href=""><span>AI</span></a>
            <li><a href=""><span>Cyber Security</span></a>
            <li><a href=""><span>Web Development</span></a>
            <li><a href=""><span>Mobile Development</span></a>
            <li><a href=""><span>Web Design</span></a>
        </div>
    </ul>
</div>
