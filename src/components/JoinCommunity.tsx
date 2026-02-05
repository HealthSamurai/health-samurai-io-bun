/**
 * Join Aidbox Community section
 */

export function JoinCommunity(): string {
  // Array of user avatar images
  const avatars = [
    "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=faces",
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop&crop=faces",
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=faces",
    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&h=80&fit=crop&crop=faces",
    "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=80&h=80&fit=crop&crop=faces",
    "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=80&h=80&fit=crop&crop=faces",
    "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=80&h=80&fit=crop&crop=faces",
    "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=80&h=80&fit=crop&crop=faces",
    "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?w=80&h=80&fit=crop&crop=faces",
    "https://images.unsplash.com/photo-1488161628813-04466f872be2?w=80&h=80&fit=crop&crop=faces",
    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop&crop=faces",
    "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=80&h=80&fit=crop&crop=faces",
    "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=80&h=80&fit=crop&crop=faces",
    "https://images.unsplash.com/photo-1463453091185-61582044d556?w=80&h=80&fit=crop&crop=faces",
    "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=80&h=80&fit=crop&crop=faces",
    "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=80&h=80&fit=crop&crop=faces"
  ];

  return `
    <section class="py-24 sm:py-32 bg-gray-50">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="text-center">
          <div class="text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-6">
            Join the Aidbox Community
          </div>
          <p class="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
            Connect with FHIR engineers, product leaders, and digital health innovators building the future of healthcare.
          </p>
          
          <!-- User avatars -->
          <div class="flex justify-center mb-12">
            <div class="flex -space-x-4">
              ${avatars.map((avatar, index) => `
                <img
                  src="${avatar}"
                  alt="Community member ${index + 1}"
                  class="w-16 h-16 rounded-full border-4 border-white object-cover"
                  loading="lazy"
                />
              `).join('')}
            </div>
          </div>
          
          <p class="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            Ask questions, share breakthroughs, and exchange best practices.Get real-time help from the Aidbox team and fellow builders.
          </p>
          
          <a
            href="https://connect.health-samurai.io/login/"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center justify-center rounded-md bg-primary px-8 py-4 text-base font-semibold text-white hover:bg-primary-dark transition-colors shadow-sm"
          >
            JOIN THE COMMUNITY
          </a>
        </div>
      </div>
    </section>
  `;
}
